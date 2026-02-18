import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { drizzle } from 'drizzle-orm/d1'
import * as schema from './db/schema'
import productsRoutes from './routes/products'
import authRoutes from './routes/auth'
import cartRoutes from './routes/cart'
import ordersRoutes from './routes/orders'
import adminRoutes from './routes/admin'
import reviewsRoutes from './routes/reviews'
import wishlistRoutes from './routes/wishlist'

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS middleware
app.use('*', cors({
  origin: ['http://localhost:3001', 'https://molava.tw'],
  credentials: true,
}))

// Health check
app.get('/', (c) => {
  return c.json({ message: 'XYN API', status: 'ok' })
})

// Routes
app.route('/api/auth', authRoutes)
app.route('/api/products', productsRoutes)
app.route('/api/cart', cartRoutes)
app.route('/api/orders', ordersRoutes)
app.route('/api/admin', adminRoutes)
app.route('/api/reviews', reviewsRoutes)
app.route('/api/wishlist', wishlistRoutes)

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404)
})

// Error handler
app.onError((err, c) => {
  console.error('Error:', err)
  return c.json({ error: 'Internal server error' }, 500)
})

export default app
