# 🎯 项目开发模板指南

> 基于 XYVN 电商系统的开发经验总结
> 适用于下一个全栈项目的开发参考

---

## 📋 项目概述

这是一个**功能完整、生产就绪**的现代化全栈电商系统开发模板。

### 核心特点
- ✅ 前后端完全分离
- ✅ TypeScript 类型安全
- ✅ 数据库持久化
- ✅ JWT + Cookie 双重认证
- ✅ 完整的管理后台
- ✅ 响应式设计
- ✅ 安全性优先
- ✅ 性能优化

---

## 🛠️ 技术栈标准

### 前端技术栈
```
核心框架: Next.js 15 + TypeScript
渲染模式: App Router (RSC + Server Actions)
状态管理: React Context / Zustand (复杂场景)
样式方案: Tailwind CSS / CSS Modules
数据获取: Server Components + fetch
部署平台: Vercel / Cloudflare Pages
```

### 后端技术栈
```
运行环境: Cloudflare Workers (Edge Runtime)
框架: Hono (轻量级，专为Workers优化)
数据库: Cloudflare D1 (SQLite-based)
ORM: Drizzle ORM (类型安全，D1原生支持)
认证方案: JWT + bcrypt-edge + Cookies
安全: Workers内置安全特性 + Rate Limiting
```


### 开发工具
```
包管理器: pnpm (推荐) / npm
开发工具: Wrangler CLI (Cloudflare Workers)
热重载: Next.js Fast Refresh
环境变量: .env.local (Next.js) + wrangler.toml (Workers)
代码质量: TypeScript + ESLint + Prettier
数据库管理: Drizzle Kit (migrations)
```

---

## 📁 项目结构标准

### 推荐目录结构
```
project-root/
├── app/                      # Next.js App Router
│   ├── (auth)/              # 认证路由组
│   │   ├── login/
│   │   └── register/
│   ├── (shop)/              # 商店路由组
│   │   ├── products/
│   │   ├── cart/
│   │   └── checkout/
│   ├── admin/               # 管理后台
│   ├── api/                 # API Routes (可选)
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   └── globals.css          # 全局样式
│
├── components/              # React组件
│   ├── ui/                 # UI组件
│   ├── forms/              # 表单组件
│   └── layouts/            # 布局组件
│
├── lib/                     # 工具函数
│   ├── db/                 # 数据库相关
│   ├── auth/               # 认证相关
│   └── utils/              # 通用工具
│
├── types/                   # TypeScript类型
│   └── index.ts
│
├── workers/                 # Cloudflare Workers
│   ├── src/
│   │   ├── index.ts        # Worker入口
│   │   ├── routes/         # API路由
│   │   ├── db/             # D1数据库
│   │   │   ├── schema.ts   # Drizzle schema
│   │   │   └── migrations/ # 数据库迁移
│   │   └── middleware/     # 中间件
│   ├── wrangler.toml       # Workers配置
│   └── package.json
│
├── public/                  # 静态资源
│   └── images/
│
├── .env.local              # Next.js环境变量
├── next.config.js          # Next.js配置
├── tailwind.config.js      # Tailwind配置
├── drizzle.config.ts       # Drizzle配置
├── package.json
└── README.md
```


---

## 🎨 设计系统标准

### 字号体系 (Typography)
```css
/* 标题层级 */
h1: 56px, font-weight: 300, letter-spacing: -0.02em  /* 超大标题 */
h2: 40px, font-weight: 300, letter-spacing: -0.02em  /* 大标题 */
h3: 28px, font-weight: 600, letter-spacing: -0.01em  /* 中标题 */
h4: 20px, font-weight: 600, letter-spacing: -0.01em  /* 小标题 */

/* 正文层级 */
body-large: 19px, line-height: 1.65
body: 17px, line-height: 1.65
body-small: 15px, line-height: 1.65
caption: 13-14px

/* 移动端适配 */
@media (max-width: 768px) {
  h1: 42-48px
  h2: 32-36px
  body: 16px
}
```

### 间距体系 (Spacing)
```css
/* 标准间距 */
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 40px
--space-3xl: 56px
--space-4xl: 72px

/* 常用场景 */
Card padding: 32-36px
Grid gap: 32px
Section margin: 80px
Section padding: 100px (vertical)
Button padding: 12px 24px
```

### 颜色体系 (Colors)
```css
/* 文字颜色 */
--color-text-primary: #111111
--color-text-secondary: #666666
--color-text-muted: #888888
--color-text-dark: #222222

/* 背景颜色 */
--color-bg-primary: #ffffff
--color-bg-secondary: #f6f6f6
--color-bg-tertiary: #f2f2f2
--color-bg-light: #fafafa

/* 边框颜色 */
--color-border: rgba(17,17,17,0.10)

/* 强调色 */
--color-accent: #667eea
--color-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### 圆角体系 (Border Radius)
```css
--radius-xs: 10px   /* 按钮 */
--radius-sm: 14px   /* 小卡片 */
--radius-md: 22px   /* 标准卡片 */
--radius-lg: 28px   /* 大卡片 */
```

### 阴影体系 (Shadows)
```css
--shadow-sm: 0 1px 0 rgba(17,17,17,0.06)
--shadow-md: 0 10px 30px rgba(17,17,17,0.08)
--shadow-lg: 0 26px 70px rgba(17,17,17,0.12)
--shadow-xl: 0 30px 80px rgba(17,17,17,0.16)

/* Hover效果 */
--shadow-hover: 0 8px 20px rgba(0,0,0,0.12)
```

### 动画标准 (Animations)
```css
/* 缓动函数 */
--ease-out: cubic-bezier(0.22, 1, 0.36, 1)
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1)

/* 持续时间 */
--duration-fast: 160ms
--duration-normal: 260ms
--duration-slow: 520ms

/* 标准过渡 */
transition: transform 280ms var(--ease-out),
            box-shadow 280ms var(--ease-out);

/* Hover效果 */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```


---

## 🔐 安全性标准

### 认证和授权
```javascript
// JWT配置
JWT_SECRET: 强随机字符串
JWT_EXPIRES_IN: 7d

// Cookie配置
httpOnly: true          // 防XSS
sameSite: 'lax'        // 防CSRF
secure: true (生产环境)  // HTTPS only
maxAge: 7天

// 密码加密
bcrypt rounds: 12      // 安全性和性能平衡
```

### API安全
```javascript
// 速率限制
一般API: 100请求/15分钟
登录API: 5请求/15分钟

// CORS配置
允许的源: 环境变量配置
credentials: true
开发环境: 允许localhost任意端口

// 输入验证
使用 express-validator
验证所有用户输入
参数化SQL查询（防SQL注入）
```

### 数据保护
```javascript
// 敏感数据
密码: bcrypt哈希存储
支付信息: 仅存储后4位
不存储CVV
环境变量存储密钥

// 数据隔离
用户数据按user_id隔离
管理员权限验证
API级别权限控制
```

---

## 🗄️ 数据库设计标准

### D1 数据库特点
```
- 基于 SQLite
- 全球边缘分布
- 低延迟访问
- 自动备份
- 支持标准SQL
- 通过Drizzle ORM管理
```

### 表设计原则
```sql
-- 主键（D1使用INTEGER）
id INTEGER PRIMARY KEY AUTOINCREMENT

-- 时间戳（使用INTEGER存储Unix时间戳）
created_at INTEGER DEFAULT (unixepoch())
updated_at INTEGER DEFAULT (unixepoch())

-- 索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE UNIQUE INDEX idx_cart_user_product ON cart_items(user_id, product_id);

-- 外键约束
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
```

### Drizzle Schema示例
```typescript
// workers/src/db/schema.ts
import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  isAdmin: integer('is_admin', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: text('category').notNull(),
  price: real('price').notNull(),
  description: text('description'),
  image: text('image'),
  status: text('status').default('available'),
  featured: integer('featured', { mode: 'boolean' }).default(false),
  stock: integer('stock').default(0),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  orderNumber: text('order_number').notNull().unique(),
  totalAmount: real('total_amount').notNull(),
  status: text('status').default('pending'),
  paymentStatus: text('payment_status').default('unpaid'),
  shippingAddress: text('shipping_address', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
```

### 数据库迁移
```bash
# 生成迁移文件
pnpm drizzle-kit generate:sqlite

# 应用迁移（通过Wrangler）
wrangler d1 migrations apply <DATABASE_NAME>

# 本地开发
wrangler d1 execute <DATABASE_NAME> --local --file=./migrations/0001_initial.sql
```


---

## 🔌 API设计标准

### RESTful规范
```
GET    /api/resource          # 获取列表
GET    /api/resource/:id      # 获取详情
POST   /api/resource          # 创建
PUT    /api/resource/:id      # 更新
PATCH  /api/resource/:id      # 部分更新
DELETE /api/resource/:id      # 删除
```

### 响应格式
```javascript
// 成功响应
{
  "success": true,
  "data": { ... },
  "message": "操作成功"
}

// 错误响应
{
  "error": "错误类型",
  "message": "错误描述",
  "details": { ... }  // 可选
}

// 列表响应
{
  "data": [ ... ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### 状态码使用
```
200 OK              # 成功
201 Created         # 创建成功
400 Bad Request     # 请求错误
401 Unauthorized    # 未认证
403 Forbidden       # 无权限
404 Not Found       # 资源不存在
409 Conflict        # 冲突（如邮箱已存在）
500 Server Error    # 服务器错误
```

### API分组
```
公开API:
  /api/auth/*           # 认证相关
  /api/products/*       # 商品浏览
  /api/categories       # 分类列表
  /api/contact          # 联系反馈
  /api/newsletter/*     # 邮件订阅

需要登录:
  /api/cart/*           # 购物车
  /api/user/*           # 用户资料
  /api/orders           # 创建订单

管理员专用:
  /api/admin/*          # 所有管理功能
```


---

## 💻 前端开发标准

### Next.js App Router模式
```typescript
// 1. Server Components (默认)
// app/products/page.tsx
export default async function ProductsPage() {
  const products = await fetchProducts(); // 直接在服务器获取数据
  return <ProductList products={products} />;
}

// 2. Client Components (需要交互)
// components/AddToCart.tsx
'use client';
export function AddToCart({ productId }: { productId: number }) {
  const [loading, setLoading] = useState(false);
  // 客户端交互逻辑
}

// 3. Server Actions (表单提交)
// app/actions.ts
'use server';
export async function createOrder(formData: FormData) {
  const data = Object.fromEntries(formData);
  // 服务器端处理
  revalidatePath('/orders');
}
```

### 组件设计原则
```typescript
// 1. 优先使用Server Components
默认所有组件都是Server Components
只在需要交互时使用'use client'

// 2. Props类型定义
interface ComponentProps {
  title: string;
  onSubmit?: (data: FormData) => void;
  isLoading?: boolean;
}

// 3. 数据获取
Server Components: 直接fetch或查询数据库
Client Components: 使用SWR或React Query

// 4. 状态管理
本地状态: useState
全局状态: Context API / Zustand
服务器状态: Server Components + revalidate
```

### 文件命名规范
```
页面: page.tsx
布局: layout.tsx
加载: loading.tsx
错误: error.tsx
组件: PascalCase.tsx
Server Actions: actions.ts
API Routes: route.ts
```

### 路由组织
```typescript
// 路由组（不影响URL）
app/
  (auth)/          # 认证相关页面
    login/
    register/
  (shop)/          # 商店页面
    products/
    cart/
  admin/           # 管理后台
  api/             # API路由（可选）

// 动态路由
app/products/[id]/page.tsx

// 并行路由
app/@modal/
app/@sidebar/

// 拦截路由
app/(..)photo/[id]/
```

### 样式管理（Tailwind CSS）
```tsx
// 1. 使用Tailwind utility classes
<div className="flex items-center gap-4 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold">Title</h2>
</div>

// 2. 自定义组件样式
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
      },
      spacing: {
        '18': '4.5rem',
      }
    }
  }
}

// 3. CSS Modules（需要时）
import styles from './Component.module.css';
```

### 性能优化
```typescript
// 1. 图片优化
import Image from 'next/image';
<Image 
  src="/product.jpg" 
  alt="Product"
  width={500}
  height={500}
  loading="lazy"
/>

// 2. 字体优化
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

// 3. 动态导入
const DynamicComponent = dynamic(() => import('./Component'), {
  loading: () => <Skeleton />,
  ssr: false
});

// 4. 数据缓存
fetch(url, { 
  next: { revalidate: 3600 } // 1小时缓存
});

// 5. 流式渲染
<Suspense fallback={<Loading />}>
  <AsyncComponent />
</Suspense>
```


---

## 🖥️ 后端开发标准（Cloudflare Workers）

### Hono框架基础
```typescript
// workers/src/index.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { jwt } from 'hono/jwt';
import { drizzle } from 'drizzle-orm/d1';

type Bindings = {
  DB: D1Database;
  JWT_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// 中间件
app.use('*', cors());
app.use('/api/admin/*', jwt({ secret: 'your-secret' }));

// 路由
app.get('/api/products', async (c) => {
  const db = drizzle(c.env.DB);
  const products = await db.select().from(productsTable);
  return c.json(products);
});

export default app;
```

### 数据库操作（Drizzle ORM）
```typescript
import { drizzle } from 'drizzle-orm/d1';
import { eq, and } from 'drizzle-orm';
import * as schema from './db/schema';

// 初始化
const db = drizzle(c.env.DB, { schema });

// 查询
const users = await db.select().from(schema.users);
const user = await db.select()
  .from(schema.users)
  .where(eq(schema.users.email, email))
  .get();

// 插入
const [newUser] = await db.insert(schema.users)
  .values({ email, passwordHash })
  .returning();

// 更新
await db.update(schema.users)
  .set({ isAdmin: true })
  .where(eq(schema.users.id, userId));

// 删除
await db.delete(schema.users)
  .where(eq(schema.users.id, userId));

// 关联查询
const ordersWithItems = await db.select()
  .from(schema.orders)
  .leftJoin(schema.orderItems, eq(schema.orders.id, schema.orderItems.orderId))
  .where(eq(schema.orders.userId, userId));
```

### 认证实现
```typescript
import { sign, verify } from 'hono/jwt';
import bcrypt from 'bcryptjs'; // 使用bcryptjs（Workers兼容）

// 注册
app.post('/api/auth/register', async (c) => {
  const { email, password } = await c.req.json();
  
  // 验证输入
  if (!email || !password) {
    return c.json({ error: 'Missing fields' }, 400);
  }
  
  // 检查用户是否存在
  const existing = await db.select()
    .from(users)
    .where(eq(users.email, email))
    .get();
    
  if (existing) {
    return c.json({ error: 'Email already exists' }, 409);
  }
  
  // 加密密码
  const passwordHash = await bcrypt.hash(password, 10);
  
  // 创建用户
  const [user] = await db.insert(users)
    .values({ email, passwordHash })
    .returning();
  
  // 生成JWT
  const token = await sign(
    { sub: user.id, email: user.email },
    c.env.JWT_SECRET
  );
  
  // 设置Cookie
  c.header('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`);
  
  return c.json({ user: { id: user.id, email: user.email } });
});

// 登录
app.post('/api/auth/login', async (c) => {
  const { email, password } = await c.req.json();
  
  const user = await db.select()
    .from(users)
    .where(eq(users.email, email))
    .get();
    
  if (!user) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }
  
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }
  
  const token = await sign(
    { sub: user.id, email: user.email },
    c.env.JWT_SECRET
  );
  
  c.header('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`);
  
  return c.json({ user: { id: user.id, email: user.email } });
});
```

### 中间件
```typescript
// 认证中间件
const authMiddleware = async (c, next) => {
  const token = c.req.cookie('token');
  
  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  
  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    c.set('userId', payload.sub);
    await next();
  } catch {
    return c.json({ error: 'Invalid token' }, 401);
  }
};

// 管理员中间件
const adminMiddleware = async (c, next) => {
  const userId = c.get('userId');
  const user = await db.select()
    .from(users)
    .where(eq(users.id, userId))
    .get();
    
  if (!user?.isAdmin) {
    return c.json({ error: 'Forbidden' }, 403);
  }
  
  await next();
};

// 使用
app.use('/api/cart/*', authMiddleware);
app.use('/api/admin/*', authMiddleware, adminMiddleware);
```

### 错误处理
```typescript
// 全局错误处理
app.onError((err, c) => {
  console.error('Error:', err);
  
  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status);
  }
  
  return c.json({ error: 'Internal server error' }, 500);
});

// 404处理
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404);
});
```

### Rate Limiting
```typescript
import { RateLimiter } from '@cloudflare/workers-rate-limiter';

const limiter = new RateLimiter({
  limit: 100,
  window: 60, // 60秒
});

app.use('/api/*', async (c, next) => {
  const ip = c.req.header('CF-Connecting-IP') || 'unknown';
  const { success } = await limiter.limit({ key: ip });
  
  if (!success) {
    return c.json({ error: 'Too many requests' }, 429);
  }
  
  await next();
});
```


---

## 🚀 部署和运维标准

### 环境变量管理

#### Next.js (.env.local)
```bash
# 公开变量（NEXT_PUBLIC_前缀）
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://example.com

# 服务器端变量
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

#### Cloudflare Workers (wrangler.toml)
```toml
name = "my-api"
main = "src/index.ts"
compatibility_date = "2024-01-01"

# D1 数据库绑定
[[d1_databases]]
binding = "DB"
database_name = "my-database"
database_id = "your-database-id"

# 环境变量
[vars]
ENVIRONMENT = "production"

# 密钥（使用wrangler secret）
# wrangler secret put JWT_SECRET
```

### 部署流程

#### Next.js部署（Vercel）
```bash
# 1. 安装Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod

# 或通过Git自动部署
git push origin main
```

#### Cloudflare Workers部署
```bash
# 1. 安装Wrangler
npm install -g wrangler

# 2. 登录
wrangler login

# 3. 创建D1数据库
wrangler d1 create my-database

# 4. 运行迁移
wrangler d1 migrations apply my-database

# 5. 部署Worker
wrangler deploy

# 本地开发
wrangler dev
```

### 数据库迁移
```bash
# 生成迁移
pnpm drizzle-kit generate:sqlite

# 本地测试
wrangler d1 execute my-database --local --file=./migrations/0001_initial.sql

# 生产环境应用
wrangler d1 migrations apply my-database --remote
```

### 监控和日志
```typescript
// Workers日志
console.log('Info message');
console.error('Error message');

// 使用Cloudflare Analytics
// 在Workers Dashboard查看

// 自定义指标
app.use('*', async (c, next) => {
  const start = Date.now();
  await next();
  const duration = Date.now() - start;
  console.log(`${c.req.method} ${c.req.path} - ${duration}ms`);
});
```

### 生产环境检查清单
```
- [ ] 设置环境变量（wrangler secret）
- [ ] 配置D1数据库绑定
- [ ] 运行数据库迁移
- [ ] 配置自定义域名
- [ ] 启用Cloudflare WAF
- [ ] 设置Rate Limiting
- [ ] 配置缓存策略
- [ ] 测试所有API端点
- [ ] 监控错误日志
- [ ] 设置告警通知
```


---

## 📝 文档标准

### 必备文档
```
README.md              # 项目说明和快速开始
QUICK_START.md         # 快速启动指南
API_DOCUMENTATION.md   # API文档
DEPLOYMENT_GUIDE.md    # 部署指南
CHANGELOG.md           # 变更日志
```

### README.md结构
```markdown
# 项目名称

简短描述

## 特性
- 功能列表

## 快速启动
- 安装步骤
- 启动命令

## 技术栈
- 前端技术
- 后端技术

## 访问地址
- 前端地址
- 后端地址
- 默认账户

## 文档
- 相关文档链接

## 许可证
```

### 代码注释标准
```javascript
// 函数注释
/**
 * 创建新订单
 * @param {Object} orderData - 订单数据
 * @param {Array} orderData.items - 订单项
 * @param {Object} orderData.contact - 联系信息
 * @returns {Promise<Object>} 订单对象
 */
async function createOrder(orderData) {
  // 实现
}

// 复杂逻辑注释
// 1. 验证用户权限
// 2. 检查库存
// 3. 创建订单
// 4. 减少库存
// 5. 发送通知
```


---

## 🧪 测试标准

### 测试类型
```javascript
// 1. 单元测试
测试单个函数/组件
使用 Jest

// 2. 集成测试
测试API端点
测试数据库操作

// 3. E2E测试
测试完整用户流程
使用 Playwright/Cypress

// 4. 手动测试
测试脚本: test-*.js
测试文档: test-*.md
```

### 测试脚本示例
```javascript
// test-api.js
async function testAPI() {
  console.log('🧪 Testing API...');
  
  // 1. 测试注册
  const registerRes = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  console.log(registerRes.ok ? '✅ Register' : '❌ Register');
  
  // 2. 测试登录
  // 3. 测试其他功能
}

testAPI().catch(console.error);
```

### 测试覆盖目标
```
核心功能: 100%
API端点: 100%
组件: 80%+
工具函数: 90%+
```

---

## 📊 性能标准

### 前端性能指标
```
首次内容绘制 (FCP): < 1.5秒
最大内容绘制 (LCP): < 2.5秒
首次输入延迟 (FID): < 100ms
累积布局偏移 (CLS): < 0.1
帧率 (FPS): 55-60
```

### 后端性能指标
```
API响应时间: < 100ms (简单查询)
API响应时间: < 500ms (复杂查询)
数据库查询: < 50ms
并发处理: 100+ req/s
```

### 优化策略
```javascript
// 前端优化
- 代码分割
- 懒加载
- 图片优化
- 缓存策略
- CDN使用

// 后端优化
- 数据库索引
- 查询优化
- 连接池
- 缓存（Redis）
- 负载均衡
```


---

## 🎯 开发流程标准

### 功能开发流程
```
1. 需求分析
   - 明确功能需求
   - 设计数据结构
   - 设计API接口

2. 数据库设计
   - 创建表结构
   - 添加索引
   - 编写初始化脚本

3. 后端开发
   - 实现API端点
   - 添加验证逻辑
   - 编写错误处理

4. 前端开发
   - 创建组件
   - 实现UI交互
   - 集成API

5. 测试
   - 编写测试脚本
   - 手动测试
   - 修复bug

6. 文档
   - 更新API文档
   - 更新README
   - 编写使用指南

7. 部署
   - 测试环境验证
   - 生产环境部署
   - 监控和维护
```

### Git工作流
```bash
# 分支命名
main/master          # 生产分支
develop              # 开发分支
feature/功能名       # 功能分支
bugfix/问题描述      # 修复分支
hotfix/紧急修复      # 热修复分支

# 提交信息格式
feat: 添加用户登录功能
fix: 修复购物车数量更新问题
docs: 更新API文档
style: 优化代码格式
refactor: 重构订单处理逻辑
test: 添加单元测试
chore: 更新依赖包
```

### 代码审查清单
```
- [ ] 代码符合项目规范
- [ ] 无TypeScript错误
- [ ] 无console.log（生产代码）
- [ ] 添加必要注释
- [ ] 错误处理完整
- [ ] 输入验证完整
- [ ] 安全性检查
- [ ] 性能考虑
- [ ] 响应式设计
- [ ] 可访问性
- [ ] 测试通过
- [ ] 文档更新
```


---

## 🔧 常见功能实现模板

### 1. 用户认证系统
```javascript
// 注册
POST /api/auth/register
- 邮箱验证
- 密码强度检查
- bcrypt加密
- 返回JWT token

// 登录
POST /api/auth/login
- 验证凭据
- 生成JWT token
- 设置HttpOnly Cookie

// 登出
POST /api/auth/logout
- 清除Cookie

// 获取当前用户
GET /api/auth/me
- 验证JWT token
- 返回用户信息
```

### 2. CRUD操作模板
```javascript
// 列表（支持分页、搜索、筛选）
GET /api/resource?page=1&limit=20&search=keyword&category=value

// 详情
GET /api/resource/:id

// 创建
POST /api/resource
- 验证输入
- 检查权限
- 创建记录
- 返回新记录

// 更新
PUT /api/resource/:id
- 验证输入
- 检查权限
- 检查资源存在
- 更新记录

// 删除
DELETE /api/resource/:id
- 检查权限
- 检查资源存在
- 删除记录
- 处理关联数据
```

### 3. 购物车系统
```javascript
// 获取购物车
GET /api/cart
- 返回用户购物车
- 包含商品详情

// 添加商品
POST /api/cart/items
- 检查商品存在
- 检查库存
- 合并重复商品

// 更新数量
PUT /api/cart/items/:id
- 验证数量
- 检查库存
- 更新记录

// 删除商品
DELETE /api/cart/items/:id

// 清空购物车
DELETE /api/cart
```

### 4. 订单系统
```javascript
// 创建订单
POST /api/orders
- 验证购物车
- 检查库存
- 生成订单号
- 创建订单和订单项
- 减少库存
- 清空购物车
- 发送通知

// 订单列表
GET /api/orders
- 用户订单列表
- 支持筛选和排序

// 订单详情
GET /api/orders/:id
- 订单信息
- 订单项列表
- 配送信息
```


---

## 🎨 UI/UX设计原则

### 设计理念
```
1. 极简主义
   - 去除不必要的装饰
   - 大量留白
   - 清晰的视觉层次

2. 一致性
   - 统一的设计语言
   - 标准化的组件
   - 可预测的交互

3. 可访问性
   - WCAG AA标准
   - 键盘导航
   - 屏幕阅读器支持
   - 颜色对比度

4. 响应式
   - 移动优先
   - 流式布局
   - 灵活的组件
```

### 交互设计
```css
/* Hover效果 */
.interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  transition: all 280ms var(--ease-out);
}

/* Focus状态 */
.interactive:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

/* 加载状态 */
.loading {
  opacity: 0.6;
  pointer-events: none;
  cursor: wait;
}

/* 禁用状态 */
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 响应式断点
```css
/* 移动端 */
@media (max-width: 768px) {
  /* 单列布局 */
  /* 较大的触摸目标 */
  /* 简化的导航 */
}

/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 2列布局 */
  /* 适中的间距 */
}

/* 桌面 */
@media (min-width: 1025px) {
  /* 多列布局 */
  /* 完整功能 */
}
```

### 动画使用原则
```
1. 有目的的动画
   - 引导用户注意力
   - 提供反馈
   - 表达状态变化

2. 性能优先
   - 使用transform和opacity
   - 避免layout和paint
   - 使用will-change

3. 尊重用户偏好
   - prefers-reduced-motion
   - 可选的动画
```


---

## 📦 依赖包选择标准

### 前端依赖
```json
{
  "dependencies": {
    "next": "^15.0.0",                // Next.js框架
    "react": "^19.0.0",               // React
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",           // TypeScript
    "tailwindcss": "^3.4.0",          // Tailwind CSS
    "zustand": "^4.5.0",              // 状态管理（可选）
    "zod": "^3.22.0"                  // 数据验证
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/node": "^20.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

### 后端依赖（Workers）
```json
{
  "dependencies": {
    "hono": "^4.0.0",                 // Web框架
    "drizzle-orm": "^0.30.0",         // ORM
    "bcryptjs": "^2.4.3",             // 密码加密（Workers兼容）
    "zod": "^3.22.0"                  // 数据验证
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.0.0",
    "wrangler": "^3.0.0",             // Cloudflare CLI
    "drizzle-kit": "^0.20.0",         // 数据库迁移工具
    "typescript": "^5.0.0"
  }
}
```

### 选择依赖的原则
```
1. 必要性
   - 真的需要这个包吗？
   - 能否用原生API实现？

2. 维护状态
   - 最近更新时间
   - GitHub stars和issues
   - 社区活跃度

3. 包大小
   - 对打包体积的影响
   - 是否支持tree-shaking

4. 安全性
   - 已知漏洞检查
   - 定期更新

5. 兼容性
   - 与其他依赖的兼容性
   - 浏览器/Node版本支持
```


---

## 🚨 错误处理标准

### 前端错误处理
```typescript
// API调用错误处理
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // 显示用户友好的错误消息
    showToast('Failed to load data. Please try again.', 'error');
    throw error;
  }
}

// 组件错误边界
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // 发送到错误追踪服务
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

### 后端错误处理
```javascript
// 异步错误处理包装器
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// 全局错误处理中间件
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  // 不暴露内部错误细节
  const statusCode = err.statusCode || 500;
  const message = process.env.NODE_ENV === 'production'
    ? 'Internal server error'
    : err.message;
  
  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404处理
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});
```

### 错误日志
```javascript
// 生产环境日志
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// 使用
logger.error('Error message', { error, context });
```


---

## 🎓 最佳实践总结

### 代码质量
```
✅ 使用TypeScript确保类型安全
✅ 遵循ESLint规则
✅ 保持函数简短（<50行）
✅ 避免深层嵌套（<3层）
✅ 使用有意义的变量名
✅ 添加必要的注释
✅ 删除未使用的代码
✅ 定期重构
```

### 安全性
```
✅ 永远不信任用户输入
✅ 使用参数化查询
✅ 密码加密存储
✅ 使用HTTPS
✅ 设置安全头
✅ 实施速率限制
✅ 定期更新依赖
✅ 环境变量存储敏感信息
```

### 性能
```
✅ 优化数据库查询
✅ 使用索引
✅ 实施缓存策略
✅ 代码分割
✅ 懒加载
✅ 图片优化
✅ 压缩资源
✅ 使用CDN
```

### 可维护性
```
✅ 模块化设计
✅ 单一职责原则
✅ DRY（Don't Repeat Yourself）
✅ 清晰的代码结构
✅ 完整的文档
✅ 一致的命名规范
✅ 版本控制
✅ 代码审查
```

### 用户体验
```
✅ 快速加载
✅ 响应式设计
✅ 清晰的反馈
✅ 优雅的错误处理
✅ 直观的导航
✅ 可访问性
✅ 一致的交互
✅ 移动友好
```


---

## 📋 项目启动检查清单

### 初始化阶段
```
- [ ] 创建项目目录结构
- [ ] 初始化Git仓库
- [ ] 创建.gitignore文件
- [ ] 设置package.json
- [ ] 安装核心依赖
- [ ] 配置TypeScript
- [ ] 创建环境变量文件
- [ ] 编写README.md
```

### 开发阶段
```
- [ ] 设计数据库结构
- [ ] 创建数据库初始化脚本
- [ ] 实现认证系统
- [ ] 实现核心功能
- [ ] 创建前端组件
- [ ] 集成前后端
- [ ] 添加错误处理
- [ ] 实施安全措施
```

### 测试阶段
```
- [ ] 编写单元测试
- [ ] 编写集成测试
- [ ] 手动测试所有功能
- [ ] 测试不同浏览器
- [ ] 测试不同设备
- [ ] 性能测试
- [ ] 安全测试
- [ ] 可访问性测试
```

### 部署前
```
- [ ] 代码审查
- [ ] 优化性能
- [ ] 压缩资源
- [ ] 配置生产环境变量
- [ ] 设置错误监控
- [ ] 配置日志系统
- [ ] 准备备份策略
- [ ] 编写部署文档
```

### 部署后
```
- [ ] 监控系统状态
- [ ] 检查错误日志
- [ ] 验证所有功能
- [ ] 性能监控
- [ ] 用户反馈收集
- [ ] 定期备份
- [ ] 安全更新
- [ ] 持续优化
```


---

## 🎯 使用本指南

### 开始新项目时

1. **创建Next.js项目**
   ```bash
   pnpm create next-app@latest my-project --typescript --tailwind --app
   cd my-project
   ```

2. **创建Workers项目**
   ```bash
   mkdir workers && cd workers
   pnpm init
   pnpm add hono drizzle-orm bcryptjs zod
   pnpm add -D wrangler drizzle-kit @cloudflare/workers-types
   wrangler init
   ```

3. **配置D1数据库**
   ```bash
   wrangler d1 create my-database
   # 复制database_id到wrangler.toml
   ```

4. **设计数据库Schema**
   ```typescript
   // workers/src/db/schema.ts
   // 按照"数据库设计标准"创建schema
   ```

5. **生成并运行迁移**
   ```bash
   pnpm drizzle-kit generate:sqlite
   wrangler d1 migrations apply my-database --local
   ```

6. **实现功能**
   ```
   - 参考"常见功能实现模板"
   - 遵循"代码组织"标准
   - 应用"设计系统标准"
   ```

7. **本地开发**
   ```bash
   # 终端1: Next.js
   pnpm dev
   
   # 终端2: Workers
   cd workers && wrangler dev
   ```

8. **部署**
   ```bash
   # Next.js (Vercel)
   vercel --prod
   
   # Workers
   cd workers && wrangler deploy
   ```

### 作为提示词使用

将本文档的相关部分复制到AI对话中：

```
我要开发一个[项目类型]，请按照以下标准：

[复制相关章节内容]

具体需求：
- [需求1]
- [需求2]
- [需求3]
```

### 持续改进

本指南基于实际项目经验，应该：
- 根据新项目经验更新
- 添加新的最佳实践
- 移除过时的内容
- 保持简洁实用

---

## 📚 参考资源

### 官方文档
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Cloudflare Workers: https://developers.cloudflare.com/workers
- Cloudflare D1: https://developers.cloudflare.com/d1
- Hono: https://hono.dev
- Drizzle ORM: https://orm.drizzle.team
- Tailwind CSS: https://tailwindcss.com

### 设计资源
- Apple Human Interface Guidelines
- Material Design
- Tailwind CSS
- CSS-Tricks

### 安全资源
- OWASP Top 10
- JWT Best Practices
- Node.js Security Checklist

### 性能资源
- Web.dev
- Lighthouse
- Chrome DevTools

---

## 🏆 项目成功标准

一个成功的项目应该：

✅ **功能完整** - 所有核心功能实现并测试通过
✅ **代码质量高** - 无编译错误，遵循最佳实践
✅ **性能优秀** - 快速响应，流畅体验
✅ **安全可靠** - 实施完整的安全措施
✅ **易于维护** - 清晰的代码结构和完整文档
✅ **用户友好** - 直观的界面和良好的体验
✅ **可扩展** - 模块化设计，易于添加新功能
✅ **生产就绪** - 可以立即部署到生产环境

---

## 📞 支持

如有问题或建议，请：
1. 查看相关章节
2. 参考官方文档
3. 搜索类似问题
4. 寻求社区帮助

---

**文档版本**: 2.0.0  
**最后更新**: 2026-02-13  
**技术栈**: Next.js 15 + Cloudflare Workers + D1  
**适用范围**: 现代化全栈Web应用开发（Edge-first架构）

---

## 🎉 结语

这份指南基于现代化的Edge-first架构，采用Next.js 15 + Cloudflare Workers + D1技术栈。

### 技术栈优势

**Next.js 15**
- React Server Components（零客户端JS）
- App Router（文件系统路由）
- 自动代码分割和优化
- 内置图片和字体优化
- 流式渲染和Suspense

**Cloudflare Workers**
- 全球边缘网络（低延迟）
- 无服务器架构（按需扩展）
- 零冷启动时间
- 内置DDoS防护
- 成本效益高

**Cloudflare D1**
- SQLite兼容
- 全球分布式
- 自动备份
- 低延迟读取
- 免费额度慷慨

遵循这些标准可以帮助你：
- 构建高性能的全球化应用
- 降低运维成本和复杂度
- 获得出色的开发体验
- 实现自动扩展和高可用

记住：这些是指导原则，不是硬性规则。根据项目实际情况灵活调整。

祝你的项目开发顺利！🚀

