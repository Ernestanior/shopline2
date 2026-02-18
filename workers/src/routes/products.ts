import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from '../db/schema'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

// Get all products
app.get('/', async (c) => {
  const db = drizzle(c.env.DB, { schema })
  const products = await db.select().from(schema.products)
  return c.json({ data: products })
})

// Get product by ID
app.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const db = drizzle(c.env.DB, { schema })
  
  const product = await db.select()
    .from(schema.products)
    .where(eq(schema.products.id, id))
    .get()
  
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  
  return c.json({ data: product })
})

export default app
