# 快速啟動指南

## 前置需求

- Node.js 20+
- pnpm (推薦) 或 npm
- Cloudflare 帳號

## 安裝步驟

### 1. 安裝前端依賴

```bash
pnpm install
```

### 2. 安裝後端依賴

```bash
cd workers
pnpm install
```

### 3. 設置 Cloudflare D1 數據庫

```bash
# 登入 Cloudflare
wrangler login

# 創建 D1 數據庫
wrangler d1 create molava-db

# 複製返回的 database_id 到 workers/wrangler.toml
```

### 4. 生成數據庫遷移

```bash
cd workers
pnpm db:generate
```

### 5. 運行數據庫遷移

```bash
# 本地開發
wrangler d1 migrations apply molava-db --local

# 生產環境
wrangler d1 migrations apply molava-db --remote
```

### 6. 設置環境變量

創建 `workers/.dev.vars` 文件：

```
JWT_SECRET=your-secret-key-here
```

### 7. 啟動開發服務器

在兩個終端窗口中分別運行：

```bash
# 終端 1: Next.js 前端
pnpm dev

# 終端 2: Cloudflare Workers 後端
cd workers
pnpm dev
```

## 訪問應用

- 前端: http://localhost:3000
- 後端 API: http://localhost:8787

## 初始化數據

可以通過 Wrangler CLI 插入初始產品數據：

```bash
wrangler d1 execute molava-db --local --command "INSERT INTO products (name, price, category, badge) VALUES ('沙漏曲線蕾絲魚骨束腰馬甲背心', 590, '背心', '2件9折、3件85折♥︎')"
```

## 部署

### 部署前端到 Vercel

```bash
vercel --prod
```

### 部署後端到 Cloudflare Workers

```bash
cd workers
wrangler deploy
```

## 常見問題

### Q: 數據庫連接失敗
A: 確保已經創建 D1 數據庫並在 wrangler.toml 中配置正確的 database_id

### Q: JWT 認證失敗
A: 檢查 .dev.vars 文件是否存在並包含 JWT_SECRET

### Q: CORS 錯誤
A: 確保 workers/src/index.ts 中的 CORS 配置包含你的前端域名
