import { Context, Next } from 'hono'
import { verify } from 'hono/jwt'
import { getCookie } from 'hono/cookie'

export const authMiddleware = async (c: Context, next: Next) => {
  const token = getCookie(c, 'token')
  
  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  
  try {
    const payload = await verify(token, c.env.JWT_SECRET || 'secret') as { sub: number }
    c.set('userId', payload.sub)
    await next()
  } catch {
    return c.json({ error: 'Invalid token' }, 401)
  }
}
