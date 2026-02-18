# 安装和启动指南

## 快速启动

### 方式一：使用启动脚本（推荐）

```bash
./START.sh
```

### 方式二：手动启动

#### 1. 安装依赖

```bash
# 前端依赖
npm install

# 后端依赖
cd workers
npm install
cd ..
```

#### 2. 启动开发服务器

在两个终端窗口中分别运行：

```bash
# 终端 1: 启动前端 (端口 3001)
npm run dev

# 终端 2: 启动后端 (端口 8788)
cd workers
npm run dev
```

## 访问地址

- 前端: http://localhost:3001
- 后端 API: http://localhost:8788

## 初始化数据库（首次运行）

```bash
cd workers

# 创建本地数据库
wrangler d1 create molava-db --local

# 应用数据库迁移
wrangler d1 migrations apply molava-db --local

# 插入测试数据
wrangler d1 execute molava-db --local --file=./migrations/0002_seed_data.sql
```

## 环境变量

### 前端 (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8788
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### 后端 (workers/.dev.vars)
```
JWT_SECRET=your-secret-key-here
```

## 常见问题

### Q: 端口被占用
A: 修改 package.json 中的端口号

### Q: 数据库连接失败
A: 确保已运行数据库迁移命令

### Q: API 请求失败
A: 检查 .env.local 中的 API_URL 是否正确

## 生产部署

### 前端 (Vercel)
```bash
vercel --prod
```

### 后端 (Cloudflare Workers)
```bash
cd workers
wrangler deploy
```
