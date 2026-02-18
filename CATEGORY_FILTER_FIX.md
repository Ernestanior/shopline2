# 分类筛选功能修复

## 问题描述

当用户在导航菜单的下拉菜单中点击不同的商品分类时，页面会跳转到 `/products?category=xxx`，但商品列表没有根据选择的分类进行筛选。

## 问题原因

`app/products/page.tsx` 是一个客户端组件（使用了 `'use client'`），但没有读取 URL 中的 `category` 查询参数。虽然 Header 组件正确地生成了带有分类参数的链接，但 products 页面没有处理这些参数。

## 解决方案

### 1. 添加 URL 参数读取

使用 Next.js 的 `useSearchParams` hook 来读取 URL 中的 category 参数：

```typescript
import { useSearchParams } from 'next/navigation'

const searchParams = useSearchParams()
const categoryFromUrl = searchParams.get('category')
```

### 2. 同步 URL 参数到状态

使用 `useEffect` 监听 URL 参数变化，并更新选中的分类：

```typescript
useEffect(() => {
  if (categoryFromUrl) {
    setSelectedCategory(categoryFromUrl)
  }
}, [categoryFromUrl])
```

### 3. 添加 Suspense 边界

因为使用了 `useSearchParams`，需要将组件包裹在 Suspense 中：

```typescript
function ProductsContent() {
  // 使用 useSearchParams 的组件
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loading />}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </main>
  )
}
```

## 修改的文件

- `app/products/page.tsx`
  - 添加 `useSearchParams` 导入
  - 添加 `Suspense` 导入
  - 将主要内容提取到 `ProductsContent` 组件
  - 添加 URL 参数读取和同步逻辑
  - 用 Suspense 包裹内容组件

## 功能说明

### Header 导航菜单

Header 组件中的分类链接格式：
```typescript
<Link href={`/products?category=${encodeURIComponent(category.name)}`}>
  {category.name}
</Link>
```

支持的分类：
- 束腰馬甲
- 連體背心
- 背心上衣
- 套裝組合

### Products 页面筛选

1. **URL 参数筛选**：当用户从导航菜单点击分类时，URL 会包含 `?category=xxx` 参数
2. **按钮筛选**：用户也可以点击页面上的分类按钮进行筛选
3. **状态同步**：两种筛选方式的状态会保持同步

## 工作流程

1. 用户在 Header 的下拉菜单中点击"束腰馬甲"
2. 页面跳转到 `/products?category=束腰馬甲`
3. `ProductsContent` 组件读取 URL 参数
4. `useEffect` 检测到 `categoryFromUrl` 变化
5. 更新 `selectedCategory` 状态为"束腰馬甲"
6. `useMemo` 重新计算筛选后的商品列表
7. 页面显示只包含"束腰馬甲"分类的商品

## 测试步骤

1. 访问首页
2. 将鼠标悬停在导航栏的"商品"上
3. 在下拉菜单中点击任意分类（如"束腰馬甲"）
4. 验证页面跳转到 `/products?category=束腰馬甲`
5. 验证商品列表只显示该分类的商品
6. 验证页面标题显示正确的分类名称
7. 验证分类按钮显示正确的选中状态

## 相关文件

- `components/Header.tsx` - 导航菜单和分类链接
- `app/products/page.tsx` - 商品列表页面和筛选逻辑
- `components/ProductCard.tsx` - 商品卡片组件

## 技术要点

- Next.js 15 的 `useSearchParams` hook
- React 的 `useEffect` 用于副作用处理
- React 的 `useMemo` 用于性能优化
- Suspense 边界用于处理异步数据加载
- URL 参数编码/解码处理中文字符

## 构建状态

✅ 构建成功，无错误
✅ 所有页面正常编译
✅ 代码已推送到 GitHub
