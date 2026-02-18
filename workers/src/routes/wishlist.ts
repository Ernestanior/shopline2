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

app.use('*', authMiddleware)

// Get wishlist
app.get('/', async (c) => {
  const userId = c.get('userId')
  const db = drizzle(c.env.DB, { schema })
  
  const items = await db.select()
    .from(schema.wishlist)
    .where(eq(schema.wishlist.userId, userId))
    .all()
  
  return c.json({ data: items })
})

// Add to wishlist
app.post('/', async (c) => {
  const userId = c.get('userId')
  const { productId } = await c.req.json()
  
  if (!productId) {
    return c.json({ error: 'Product ID required' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  // Check if already in wishlist
  const existing = await db.select()
    .from(schema.wishlist)
    .where(and(
      eq(schema.wishlist.userId, userId),
      eq(schema.wishlist.productId, productId)
    ))
    .get()
  
  if (existing) {
    return c.json({ error: 'Already in wishlist' }, 409)
  }
  
  const [item] = await db.insert(schema.wishlist)
    .values({ userId, productId })
    .returning()
  
  return c.json({ success: true, data: item })
})

// Remove from wishlist
app.delete('/:productId', async (c) => {
  const userId = c.get('userId')
  const productId = parseInt(c.req.param('productId'))
  
  const db = drizzle(c.env.DB, { schema })
  
  await db.delete(schema.wishlist)
    .where(and(
      eq(schema.wishlist.userId, userId),
      eq(schema.wishlist.productId, productId)
    ))
  
  return c.json({ success: true })
})

export default app
