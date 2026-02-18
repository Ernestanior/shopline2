import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq, and } from 'drizzle-orm'
import * as schema from '../db/schema'
import { authMiddleware } from '../middleware/auth'

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Apply auth middleware to all cart routes
app.use('*', authMiddleware)

// Get cart
app.get('/', async (c) => {
  const userId = c.get('userId')
  const db = drizzle(c.env.DB, { schema })
  
  const items = await db.select()
    .from(schema.cartItems)
    .where(eq(schema.cartItems.userId, userId))
    .all()
  
  return c.json({ data: items })
})

// Add to cart
app.post('/items', async (c) => {
  const userId = c.get('userId')
  const { productId, quantity = 1 } = await c.req.json()
  
  if (!productId) {
    return c.json({ error: 'Product ID required' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  // Check if item already in cart
  const existing = await db.select()
    .from(schema.cartItems)
    .where(and(
      eq(schema.cartItems.userId, userId),
      eq(schema.cartItems.productId, productId)
    ))
    .get()
  
  if (existing) {
    // Update quantity
    const [updated] = await db.update(schema.cartItems)
      .set({ quantity: existing.quantity + quantity })
      .where(eq(schema.cartItems.id, existing.id))
      .returning()
    
    return c.json({ success: true, data: updated })
  }
  
  // Add new item
  const [item] = await db.insert(schema.cartItems)
    .values({ userId, productId, quantity })
    .returning()
  
  return c.json({ success: true, data: item })
})

// Update cart item
app.put('/items/:id', async (c) => {
  const userId = c.get('userId')
  const id = parseInt(c.req.param('id'))
  const { quantity } = await c.req.json()
  
  if (!quantity || quantity < 1) {
    return c.json({ error: 'Invalid quantity' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  const [updated] = await db.update(schema.cartItems)
    .set({ quantity })
    .where(and(
      eq(schema.cartItems.id, id),
      eq(schema.cartItems.userId, userId)
    ))
    .returning()
  
  return c.json({ success: true, data: updated })
})

// Delete cart item
app.delete('/items/:id', async (c) => {
  const userId = c.get('userId')
  const id = parseInt(c.req.param('id'))
  
  const db = drizzle(c.env.DB, { schema })
  
  await db.delete(schema.cartItems)
    .where(and(
      eq(schema.cartItems.id, id),
      eq(schema.cartItems.userId, userId)
    ))
  
  return c.json({ success: true })
})

// Clear cart
app.delete('/', async (c) => {
  const userId = c.get('userId')
  const db = drizzle(c.env.DB, { schema })
  
  await db.delete(schema.cartItems)
    .where(eq(schema.cartItems.userId, userId))
  
  return c.json({ success: true })
})

export default app
