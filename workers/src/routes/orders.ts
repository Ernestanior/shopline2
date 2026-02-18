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

app.use('*', authMiddleware)

// Get user orders
app.get('/', async (c) => {
  const userId = c.get('userId')
  const db = drizzle(c.env.DB, { schema })
  
  const orders = await db.select()
    .from(schema.orders)
    .where(eq(schema.orders.userId, userId))
    .all()
  
  return c.json({ data: orders })
})

// Get order by ID
app.get('/:id', async (c) => {
  const userId = c.get('userId')
  const id = parseInt(c.req.param('id'))
  const db = drizzle(c.env.DB, { schema })
  
  const order = await db.select()
    .from(schema.orders)
    .where(eq(schema.orders.id, id))
    .get()
  
  if (!order || order.userId !== userId) {
    return c.json({ error: 'Order not found' }, 404)
  }
  
  const items = await db.select()
    .from(schema.orderItems)
    .where(eq(schema.orderItems.orderId, id))
    .all()
  
  return c.json({ data: { ...order, items } })
})

// Create order
app.post('/', async (c) => {
  const userId = c.get('userId')
  const { items, shippingAddress, contactInfo } = await c.req.json()
  
  if (!items || items.length === 0) {
    return c.json({ error: 'No items in order' }, 400)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  // Calculate total
  const totalAmount = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
  
  // Generate order number
  const orderNumber = `ORD${Date.now()}`
  
  // Create order
  const [order] = await db.insert(schema.orders)
    .values({
      userId,
      orderNumber,
      totalAmount,
      shippingAddress,
      contactInfo,
    })
    .returning()
  
  // Create order items
  for (const item of items) {
    await db.insert(schema.orderItems)
      .values({
        orderId: order.id,
        productId: item.productId,
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
      })
  }
  
  // Clear cart
  await db.delete(schema.cartItems)
    .where(eq(schema.cartItems.userId, userId))
  
  return c.json({ success: true, data: order })
})

export default app
