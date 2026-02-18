import { Context, Next } from 'hono'
import { verify } from 'hono/jwt'

export const authMiddleware = async (c: Context, next: Next) => {
  const token = c.req.cookie('token')
  
  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  
  try {
    const payload = await verify(token, c.env.JWT_SECRET || 'secret')
    c.set('userId', payload.sub as number)
    await next()
  } catch {
    return c.json({ error: 'Invalid token' }, 401)
  }
}
