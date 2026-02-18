# MOLAVA 電商系統 - 完整設置指南

## 系統架構
- **前端**: Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **後端**: Cloudflare Workers + Hono Framework
- **數據庫**: Cloudflare D1 (SQLite)
- **認證**: JWT + HTTP-only Cookies

## 快速啟動

### 1. 安裝依賴

```bash
# 安裝前端依賴
npm install

# 安裝後端依賴
cd workers
npm install
cd ..
```

### 2. 初始化數據庫

```bash
cd workers

# 創建數據庫
npx wrangler d1 create molava-db

# 運行遷移
npx wrangler d1 migrations apply molava-db --local

# 查看數據
npx wrangler d1 execute molava-db --local --command "SELECT * FROM products"
```

### 3. 啟動服務

使用提供的啟動腳本：
```bash
./START.sh
```

或手動啟動：
```bash
# 終端 1: 啟動後端 (端口 8788)
cd workers
npm run dev

# 終端 2: 啟動前端 (端口 3001)
npm run dev
```

### 4. 訪問應用

- **前端**: http://localhost:3001
- **後端 API**: http://localhost:8788
- **管理員帳號**: admin@molava.tw / admin123

## 功能清單

### 已完成功能 ✅

#### 用戶功能
- ✅ 用戶註冊/登入/登出
- ✅ 個人資料管理
- ✅ 訂單查詢
- ✅ 購物車管理
- ✅ 願望清單
- ✅ 商品評價

#### 商品功能
- ✅ 商品列表展示
- ✅ 商品詳情頁
- ✅ 商品分類
- ✅ 商品搜索
- ✅ 商品篩選
- ✅ 商品排序

#### 購物流程
- ✅ 加入購物車
- ✅ 購物車編輯
- ✅ 結帳流程
- ✅ 訂單創建
- ✅ 訂單管理

#### 管理功能
- ✅ 商品管理 (CRUD)
- ✅ 訂單管理
- ✅ 訂單狀態更新

#### 頁面
- ✅ 首頁
- ✅ 商品列表頁
- ✅ 商品詳情頁
- ✅ 購物車頁
- ✅ 結帳頁
- ✅ 訂單頁
- ✅ 個人中心
- ✅ 管理後台
- ✅ 登入/註冊頁
- ✅ 常見問題頁
- ✅ 退換貨政策頁
- ✅ 配送資訊頁
- ✅ 聯絡我們頁

## API 端點

### 認證 API
- `POST /api/auth/register` - 用戶註冊
- `POST /api/auth/login` - 用戶登入
- `POST /api/auth/logout` - 用戶登出
- `GET /api/auth/me` - 獲取當前用戶

### 商品 API
- `GET /api/products` - 獲取所有商品
- `GET /api/products/:id` - 獲取單個商品

### 購物車 API
- `GET /api/cart` - 獲取購物車
- `POST /api/cart/items` - 添加商品到購物車
- `PUT /api/cart/items/:id` - 更新購物車商品
- `DELETE /api/cart/items/:id` - 刪除購物車商品
- `DELETE /api/cart` - 清空購物車

### 訂單 API
- `GET /api/orders` - 獲取用戶訂單
- `GET /api/orders/:id` - 獲取訂單詳情
- `POST /api/orders` - 創建訂單

### 願望清單 API
- `GET /api/wishlist` - 獲取願望清單
- `POST /api/wishlist` - 添加到願望清單
- `DELETE /api/wishlist/:productId` - 從願望清單移除

### 評價 API
- `GET /api/reviews/product/:productId` - 獲取商品評價
- `POST /api/reviews` - 創建評價

### 管理 API
- `GET /api/admin/products` - 獲取所有商品（管理）
- `POST /api/admin/products` - 創建商品
- `PUT /api/admin/products/:id` - 更新商品
- `DELETE /api/admin/products/:id` - 刪除商品
- `GET /api/admin/orders` - 獲取所有訂單
- `PATCH /api/admin/orders/:id/status` - 更新訂單狀態

## 數據庫結構

### users (用戶表)
- id, email, password_hash, name, is_admin, created_at, updated_at

### products (商品表)
- id, name, description, price, image, category, badge, stock, featured, status, created_at

### cart_items (購物車表)
- id, user_id, product_id, quantity, created_at

### orders (訂單表)
- id, user_id, order_number, total_amount, status, payment_status, shipping_address, contact_info, created_at

### order_items (訂單商品表)
- id, order_id, product_id, product_name, price, quantity, created_at

### reviews (評價表)
- id, user_id, product_id, rating, content, created_at

### wishlist (願望清單表)
- id, user_id, product_id, created_at

## 環境變量

### 前端 (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8788
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### 後端 (wrangler.toml)
```toml
name = "molava-api"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[vars]
JWT_SECRET = "your-secret-key-change-in-production"

[[d1_databases]]
binding = "DB"
database_name = "molava-db"
database_id = "your-database-id"
```

## 下一步優化建議

### 待完成功能
1. **圖片上傳**: 集成 Cloudflare Images 或 R2
2. **支付集成**: 整合第三方支付（如 Stripe, PayPal）
3. **郵件通知**: 訂單確認、發貨通知
4. **搜索優化**: 全文搜索、模糊搜索
5. **性能優化**: 圖片懶加載、CDN 配置
6. **SEO 優化**: Meta 標籤、結構化數據
7. **多語言支持**: i18n 國際化
8. **優惠券系統**: 折扣碼、促銷活動

### 部署到生產環境

1. **部署後端到 Cloudflare Workers**:
```bash
cd workers
npx wrangler deploy
```

2. **部署前端到 Vercel/Cloudflare Pages**:
```bash
npm run build
# 然後連接到 Vercel 或 Cloudflare Pages
```

3. **配置生產環境變量**
4. **設置自定義域名**
5. **配置 SSL 證書**

## 故障排除

### 數據庫連接問題
```bash
# 檢查數據庫狀態
cd workers
npx wrangler d1 info molava-db

# 重新運行遷移
npx wrangler d1 migrations apply molava-db --local
```

### 端口衝突
如果端口被佔用，修改 package.json 中的端口號。

### CORS 錯誤
確保後端 CORS 配置包含前端 URL。

## 技術支持

如有問題，請查看：
- API_DOCUMENTATION.md - API 詳細文檔
- IMAGE_GUIDE.md - 圖片設置指南
- TEST_GUIDE.md - 測試指南
