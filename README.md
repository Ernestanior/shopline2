# XYN 女装电商系统

基于 Next.js 15 + Cloudflare Workers + D1 的现代化电商平台

## 特性

- ✅ 前后端完全分离
- ✅ TypeScript 类型安全
- ✅ 响应式设计
- ✅ 购物车系统
- ✅ 订单管理
- ✅ 管理后台
- ✅ 全球边缘部署

## 技术栈

### 前端
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

### 后端
- Cloudflare Workers
- Hono Framework
- Cloudflare D1 (SQLite)
- Drizzle ORM

## 快速启动

### 前端
```bash
pnpm install
pnpm dev
```

### 后端
```bash
cd workers
pnpm install
wrangler dev
```

## 访问地址

- 前端: http://localhost:3000
- 后端: http://localhost:8787

## 文档

- [快速启动指南](./QUICK_START.md)
- [API文档](./API_DOCUMENTATION.md)
- [部署指南](./DEPLOYMENT_GUIDE.md)
