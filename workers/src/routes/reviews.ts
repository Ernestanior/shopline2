import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from '../db/schema'
import { authMiddleware } from '../middleware/auth'

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Get reviews for a product
app.get('/product/:productId', async (c) => {
  const productId = parseInt(c.req.param('productId'))
  const db = drizzle(c.env.DB, { schema })
  
  const reviews = await db.select()
    .from(schema.reviews)
    .where(eq(schema.reviews.productId, productId))
    .all()
  
  return c.json({ data: reviews })
})

// Create review (requires auth)
app.post('/', authMiddleware, async (c) => {
  const userId = c.get('userId')
  const { productId, rating, content } = await c.req.json()
  
  if (!productId || !rating) {
    return c.json({ error: 'Missing required fields' }, 400)
  }
  
  if (rating < 1 || rating > 5) {
    return c.json({ error: 'Rating must be between 1 and 5' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  const [review] = await db.insert(schema.reviews)
    .values({ userId, productId, rating, content })
    .returning()
  
  return c.json({ success: true, data: review })
})

export default app
