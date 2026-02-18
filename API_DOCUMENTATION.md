# API 文檔

Base URL: `http://localhost:8787` (開發環境)

## 認證

### 註冊
```
POST /api/auth/register
```

請求體:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

響應:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "User Name"
  }
}
```

### 登入
```
POST /api/auth/login
```

請求體:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### 登出
```
POST /api/auth/logout
```

## 商品

### 獲取所有商品
```
GET /api/products
```

響應:
```json
{
  "data": [
    {
      "id": 1,
      "name": "商品名稱",
      "price": 590,
      "category": "背心",
      "badge": "2件9折、3件85折♥︎",
      "stock": 50
    }
  ]
}
```

### 獲取單個商品
```
GET /api/products/:id
```

## 購物車 (需要認證)

### 獲取購物車
```
GET /api/cart
```

### 添加商品到購物車
```
POST /api/cart/items
```

請求體:
```json
{
  "productId": 1,
  "quantity": 1
}
```

### 更新購物車商品數量
```
PUT /api/cart/items/:id
```

請求體:
```json
{
  "quantity": 2
}
```

### 刪除購物車商品
```
DELETE /api/cart/items/:id
```

### 清空購物車
```
DELETE /api/cart
```

## 訂單 (需要認證)

### 獲取用戶訂單
```
GET /api/orders
```

### 獲取訂單詳情
```
GET /api/orders/:id
```

### 創建訂單
```
POST /api/orders
```

請求體:
```json
{
  "items": [
    {
      "productId": 1,
      "name": "商品名稱",
      "price": 590,
      "quantity": 2
    }
  ],
  "shippingAddress": {
    "name": "收件人",
    "address": "地址",
    "city": "城市",
    "postalCode": "100"
  },
  "contactInfo": {
    "email": "user@example.com",
    "phone": "0912345678"
  }
}
```

## 管理員 API (需要管理員權限)

### 獲取所有商品
```
GET /api/admin/products
```

### 創建商品
```
POST /api/admin/products
```

### 更新商品
```
PUT /api/admin/products/:id
```

### 刪除商品
```
DELETE /api/admin/products/:id
```

### 獲取所有訂單
```
GET /api/admin/orders
```

### 更新訂單狀態
```
PATCH /api/admin/orders/:id/status
```

請求體:
```json
{
  "status": "processing"
}
```

## 錯誤響應

所有錯誤響應格式:
```json
{
  "error": "錯誤訊息"
}
```

常見狀態碼:
- 200: 成功
- 201: 創建成功
- 400: 請求錯誤
- 401: 未認證
- 403: 無權限
- 404: 資源不存在
- 409: 衝突（如郵箱已存在）
- 500: 服務器錯誤
