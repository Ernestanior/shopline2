# 部署指南

## 前置準備

1. Cloudflare 帳號
2. Vercel 帳號（前端部署）
3. 已完成本地開發測試

## 後端部署（Cloudflare Workers）

### 1. 創建 D1 數據庫

```bash
cd workers
wrangler d1 create molava-db
```

複製返回的 `database_id` 到 `wrangler.toml`

### 2. 運行數據庫遷移

```bash
# 應用結構遷移
wrangler d1 migrations apply molava-db --remote

# 插入初始數據
wrangler d1 execute molava-db --remote --file=./migrations/0002_seed_data.sql
```

### 3. 設置環境變量

```bash
# 設置 JWT 密鑰
wrangler secret put JWT_SECRET
# 輸入一個強隨機字符串
```

### 4. 部署 Worker

```bash
wrangler deploy
```

部署完成後會得到 Worker URL，例如：`https://molava-api.your-subdomain.workers.dev`

## 前端部署（Vercel）

### 1. 更新環境變量

在 Vercel 項目設置中添加：

```
NEXT_PUBLIC_API_URL=https://molava-api.your-subdomain.workers.dev
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. 部署

```bash
vercel --prod
```

或通過 Git 自動部署：
1. 推送代碼到 GitHub
2. 在 Vercel 導入項目
3. 自動部署

## 配置自定義域名

### Cloudflare Workers

1. 進入 Cloudflare Dashboard
2. 選擇 Workers & Pages
3. 選擇你的 Worker
4. 添加自定義域名

### Vercel

1. 進入 Vercel 項目設置
2. Domains 選項卡
3. 添加自定義域名

## 更新 CORS 配置

部署後，更新 `workers/src/index.ts` 中的 CORS 配置：

```typescript
app.use('*', cors({
  origin: ['https://your-domain.com'],
  credentials: true,
}))
```

## 創建管理員帳號

```bash
# 連接到生產數據庫
wrangler d1 execute molava-db --remote --command \
  "UPDATE users SET is_admin = 1 WHERE email = 'admin@example.com'"
```

## 監控和日誌

### Cloudflare Workers

1. 進入 Workers Dashboard
2. 查看 Analytics 和 Logs

### Vercel

1. 進入項目 Dashboard
2. 查看 Analytics 和 Logs

## 備份數據庫

```bash
# 導出數據
wrangler d1 export molava-db --remote --output=backup.sql
```

## 回滾部署

### Workers

```bash
wrangler rollback
```

### Vercel

在 Deployments 頁面選擇之前的部署版本進行回滾

## 性能優化

1. 啟用 Cloudflare CDN
2. 配置緩存策略
3. 啟用圖片優化
4. 使用 Vercel Edge Functions

## 安全檢查清單

- [ ] JWT_SECRET 已設置為強隨機字符串
- [ ] CORS 配置正確
- [ ] 數據庫遷移已應用
- [ ] 管理員帳號已創建
- [ ] 環境變量已配置
- [ ] 自定義域名已配置
- [ ] HTTPS 已啟用
- [ ] Rate Limiting 已配置
