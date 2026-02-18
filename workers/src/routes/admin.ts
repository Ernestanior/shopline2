import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from '../db/schema'
import { authMiddleware } from '../middleware/auth'
import { adminMiddleware } from '../middleware/admin'

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Apply auth and admin middleware
app.use('*', authMiddleware, adminMiddleware)

// Get all products (admin)
app.get('/products', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const products = await db.select().from(schema.products).all()
  return c.json({ data: products })
})

// Create product
app.post('/products', async (c) => {
  const { name, description, price, category, image, stock, badge } = await c.req.json()
  
  if (!name || !price || !category) {
    return c.json({ error: 'Missing required fields' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  const [product] = await db.insert(schema.products)
    .values({ name, description, price, category, image, stock, badge })
    .returning()
  
  return c.json({ success: true, data: product })
})

// Update product
app.put('/products/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const updates = await c.req.json()
  
  const db = drizzle(c.env.DB, { schema })
  
  const [product] = await db.update(schema.products)
    .set(updates)
    .where(eq(schema.products.id, id))
    .returning()
  
  return c.json({ success: true, data: product })
})

// Delete product
app.delete('/products/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const db = drizzle(c.env.DB, { schema })
  
  await db.delete(schema.products)
    .where(eq(schema.products.id, id))
  
  return c.json({ success: true })
})

// Get all orders (admin)
app.get('/orders', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const orders = await db.select().from(schema.orders).all()
  return c.json({ data: orders })
})

// Update order status
app.patch('/orders/:id/status', async (c) => {
  const id = parseInt(c.req.param('id'))
  const { status } = await c.req.json()
  
  if (!status) {
    return c.json({ error: 'Status required' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  const [order] = await db.update(schema.orders)
    .set({ status })
    .where(eq(schema.orders.id, id))
    .returning()
  
  return c.json({ success: true, data: order })
})

export default app
