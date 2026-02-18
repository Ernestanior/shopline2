import { Context, Next } from 'hono'
import { drizzle } from 'drizzle-orm/d1'
import { eq } from 'drizzle-orm'
import * as schema from '../db/schema'

export const adminMiddleware = async (c: Context, next: Next) => {
  const userId = c.get('userId')
  
  if (!userId) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  
  const db = drizzle(c.env.DB, { schema })
  
  const user = await db.select()
    .from(schema.users)
    .where(eq(schema.users.id, userId))
    .get()
  
  if (!user?.isAdmin) {
    return c.json({ error: 'Forbidden - Admin access required' }, 403)
  }
  
  await next()
}
