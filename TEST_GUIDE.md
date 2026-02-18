# 測試指南

## 本地測試

### 1. 安裝依賴

```bash
# 前端
pnpm install

# 後端
cd workers
pnpm install
```

### 2. 設置環境變量

創建 `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8787
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

創建 `workers/.dev.vars`:
```
JWT_SECRET=test-secret-key-for-development
```

### 3. 初始化數據庫

```bash
cd workers

# 創建本地數據庫
wrangler d1 create molava-db --local

# 應用遷移
wrangler d1 migrations apply molava-db --local

# 插入測試數據
wrangler d1 execute molava-db --local --file=./migrations/0002_seed_data.sql
```

### 4. 啟動開發服務器

```bash
# 終端 1: 前端
pnpm dev

# 終端 2: 後端
cd workers
pnpm dev
```

### 5. 訪問應用

- 前端: http://localhost:3000
- 後端 API: http://localhost:8787

## 功能測試清單

### 前端測試

- [ ] 首頁正常顯示
- [ ] 商品列表頁正常顯示
- [ ] 商品詳情頁正常顯示
- [ ] 購物車功能正常
- [ ] 註冊功能正常
- [ ] 登入功能正常
- [ ] 結帳流程正常
- [ ] 訂單列表正常顯示
- [ ] 響應式設計正常
- [ ] 導航功能正常

### 後端測試

#### 認證 API

```bash
# 註冊
curl -X POST http://localhost:8787/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# 登入
curl -X POST http://localhost:8787/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  -c cookies.txt

# 登出
curl -X POST http://localhost:8787/api/auth/logout \
  -b cookies.txt
```

#### 商品 API

```bash
# 獲取所有商品
curl http://localhost:8787/api/products

# 獲取單個商品
curl http://localhost:8787/api/products/1
```

#### 購物車 API（需要認證）

```bash
# 獲取購物車
curl http://localhost:8787/api/cart -b cookies.txt

# 添加商品到購物車
curl -X POST http://localhost:8787/api/cart/items \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"productId":1,"quantity":1}'

# 更新購物車商品數量
curl -X PUT http://localhost:8787/api/cart/items/1 \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"quantity":2}'

# 刪除購物車商品
curl -X DELETE http://localhost:8787/api/cart/items/1 -b cookies.txt
```

#### 訂單 API（需要認證）

```bash
# 創建訂單
curl -X POST http://localhost:8787/api/orders \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "items": [
      {"productId":1,"name":"商品名稱","price":590,"quantity":2}
    ],
    "shippingAddress": {
      "name":"收件人","address":"地址","city":"台北市","postalCode":"100"
    },
    "contactInfo": {
      "email":"test@example.com","phone":"0912345678"
    }
  }'

# 獲取訂單列表
curl http://localhost:8787/api/orders -b cookies.txt
```

### 管理員功能測試

```bash
# 首先創建管理員帳號
wrangler d1 execute molava-db --local --command \
  "UPDATE users SET is_admin = 1 WHERE email = 'admin@example.com'"

# 登入管理員帳號
curl -X POST http://localhost:8787/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}' \
  -c admin_cookies.txt

# 創建商品
curl -X POST http://localhost:8787/api/admin/products \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{
    "name":"新商品",
    "price":690,
    "category":"背心",
    "stock":30,
    "badge":"新品上市"
  }'

# 更新商品
curl -X PUT http://localhost:8787/api/admin/products/1 \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"price":650}'

# 獲取所有訂單
curl http://localhost:8787/api/admin/orders -b admin_cookies.txt

# 更新訂單狀態
curl -X PATCH http://localhost:8787/api/admin/orders/1/status \
  -H "Content-Type: application/json" \
  -b admin_cookies.txt \
  -d '{"status":"processing"}'
```

## 性能測試

### 前端性能

使用 Lighthouse 測試：
```bash
# 安裝 Lighthouse
npm install -g lighthouse

# 運行測試
lighthouse http://localhost:3000 --view
```

目標指標：
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 後端性能

使用 Apache Bench 測試：
```bash
# 安裝 ab
# macOS: brew install httpd
# Ubuntu: sudo apt-get install apache2-utils

# 測試商品列表 API
ab -n 1000 -c 10 http://localhost:8787/api/products
```

## 瀏覽器兼容性測試

測試瀏覽器：
- [ ] Chrome (最新版)
- [ ] Firefox (最新版)
- [ ] Safari (最新版)
- [ ] Edge (最新版)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 常見問題

### Q: 數據庫連接失敗
A: 確保已運行 `wrangler d1 migrations apply molava-db --local`

### Q: CORS 錯誤
A: 檢查 workers/src/index.ts 中的 CORS 配置

### Q: 認證失敗
A: 確保 .dev.vars 文件存在並包含 JWT_SECRET

### Q: 商品圖片不顯示
A: 目前使用佔位符，實際部署時需要上傳真實圖片
