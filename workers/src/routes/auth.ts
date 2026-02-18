import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import { sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs'
import * as schema from '../db/schema'
import { authMiddleware } from '../middleware/auth'

type Bindings = {
  DB: D1Database
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Register
app.post('/register', async (c) => {
  try {
    const { email, password, name } = await c.req.json()
    
    if (!email || !password) {
      return c.json({ error: 'Email and password required' }, 400)
    }
    
    const db = drizzle(c.env.DB, { schema })
    
    // Check if user exists
    const existing = await db.select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .get()
    
    if (existing) {
      return c.json({ error: 'Email already exists' }, 409)
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)
    
    // Create user
    const [user] = await db.insert(schema.users)
      .values({ email, passwordHash, name })
      .returning()
    
    // Generate JWT
    const token = await sign(
      { sub: user.id, email: user.email },
      c.env.JWT_SECRET || 'secret'
    )
    
    // Set cookie
    c.header('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`)
    
    return c.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name }
    })
  } catch (error) {
    console.error('Register error:', error)
    return c.json({ error: 'Registration failed' }, 500)
  }
})

// Login
app.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json()
    
    if (!email || !password) {
      return c.json({ error: 'Email and password required' }, 400)
    }
    
    const db = drizzle(c.env.DB, { schema })
    
    const user = await db.select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .get()
    
    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }
    
    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }
    
    const token = await sign(
      { sub: user.id, email: user.email },
      c.env.JWT_SECRET || 'secret'
    )
    
    c.header('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`)
    
    return c.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name }
    })
  } catch (error) {
    console.error('Login error:', error)
    return c.json({ error: 'Login failed' }, 500)
  }
})

// Logout
app.post('/logout', (c) => {
  c.header('Set-Cookie', 'token=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0')
  return c.json({ success: true })
})

// Get current user
app.get('/me', authMiddleware, async (c) => {
  try {
    const userId = c.get('userId')
    const db = drizzle(c.env.DB, { schema })
    
    const user = await db.select({
      id: schema.users.id,
      email: schema.users.email,
      name: schema.users.name,
      isAdmin: schema.users.isAdmin,
    })
      .from(schema.users)
      .where(eq(schema.users.id, userId))
      .get()
    
    if (!user) {
      return c.json({ error: 'User not found' }, 404)
    }
    
    return c.json({ user })
  } catch (error) {
    console.error('Get user error:', error)
    return c.json({ error: 'Failed to get user' }, 500)
  }
})

export default app
