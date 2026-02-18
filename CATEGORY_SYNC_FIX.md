# 分类名称同步修复

## 问题描述

Header 导航菜单和 Products 页面使用的分类名称不一致：

**Header 中的分类**：
- 束腰馬甲 ✓
- 連體背心 ✓
- 背心上衣 ✗
- 套裝組合 ✗

**Products 页面中的分类**：
- 束腰馬甲 ✓
- 連體背心 ✓
- 背心 ✗
- 套裝 ✗

这导致用户点击 Header 中的"背心上衣"或"套裝組合"时，Products 页面无法正确筛选商品。

## 解决方案

创建一个共享的分类配置文件，确保整个应用使用统一的分类名称。

### 1. 创建共享配置文件

新建 `lib/categories.ts`：

```typescript
export const CATEGORIES = {
  ALL: '全部',
  CORSET: '束腰馬甲',
  BODYSUIT: '連體背心',
  VEST: '背心上衣',
  SET: '套裝組合',
} as const

export const CATEGORY_LIST = [
  CATEGORIES.ALL,
  CATEGORIES.CORSET,
  CATEGORIES.BODYSUIT,
  CATEGORIES.VEST,
  CATEGORIES.SET,
]

export const HEADER_CATEGORIES = [
  {
    name: CATEGORIES.CORSET,
    items: ['前扣版', '背扣版', '魚骨款'],
    image: '/images/products/product-1.jpg'
  },
  {
    name: CATEGORIES.BODYSUIT,
    items: ['蕾絲款', '網紗款', '雕花款'],
    image: '/images/products/product-15.jpg'
  },
  {
    name: CATEGORIES.VEST,
    items: ['排釦款', '法式款', '高冷款'],
    image: '/images/products/product-18.jpg'
  },
  {
    name: CATEGORIES.SET,
    items: ['西裝套裝', '短褲套裝', '裙裝套裝'],
    image: '/images/products/product-5.jpg'
  }
]
```

### 2. 更新 Header 组件

```typescript
import { HEADER_CATEGORIES } from '@/lib/categories'

// 移除本地的 productCategories 定义
// 使用导入的 HEADER_CATEGORIES
```

### 3. 更新 Products 页面

```typescript
import { CATEGORIES, CATEGORY_LIST } from '@/lib/categories'

// 更新商品数据使用统一的分类名
const allProducts = [
  { ..., category: CATEGORIES.CORSET },
  { ..., category: CATEGORIES.BODYSUIT },
  { ..., category: CATEGORIES.VEST },
  { ..., category: CATEGORIES.SET },
]

// 使用 CATEGORY_LIST 替代硬编码的分类数组
```

## 修改的文件

1. **lib/categories.ts** (新建)
   - 定义统一的分类常量
   - 导出分类列表
   - 导出 Header 菜单配置

2. **components/Header.tsx**
   - 导入 `HEADER_CATEGORIES`
   - 移除本地的 `productCategories` 定义
   - 使用共享配置

3. **app/products/page.tsx**
   - 导入 `CATEGORIES` 和 `CATEGORY_LIST`
   - 更新所有商品的 category 字段
   - 使用 `CATEGORY_LIST` 渲染筛选按钮
   - 添加类型注解 `useState<string>`

## 统一后的分类

| 分类常量 | 显示名称 | 用途 |
|---------|---------|------|
| CATEGORIES.ALL | 全部 | 显示所有商品 |
| CATEGORIES.CORSET | 束腰馬甲 | 束腰马甲类商品 |
| CATEGORIES.BODYSUIT | 連體背心 | 连体背心类商品 |
| CATEGORIES.VEST | 背心上衣 | 背心上衣类商品 |
| CATEGORIES.SET | 套裝組合 | 套装组合类商品 |

## 商品分类映射

更新了 20 个商品的分类：

- **束腰馬甲** (7个): product-1, 2, 3, 4, 7, 9, 11
- **連體背心** (2个): product-15, 16
- **背心上衣** (3个): product-17, 18, 19
- **套裝組合** (8个): product-5, 6, 8, 10, 12, 13, 14, 20

## 优势

1. **单一数据源**：所有分类定义在一个地方，易于维护
2. **类型安全**：使用 TypeScript 常量，避免拼写错误
3. **一致性**：确保整个应用使用相同的分类名称
4. **可扩展**：添加新分类只需修改一个文件
5. **可维护**：修改分类名称只需更新配置文件

## 测试步骤

1. 访问首页
2. 悬停在导航栏的"商品"上
3. 点击"背心上衣"分类
4. 验证 URL 为 `/products?category=背心上衣`
5. 验证页面显示 3 个背心上衣商品（product-17, 18, 19）
6. 验证页面标题显示"背心上衣"
7. 验证"背心上衣"按钮处于选中状态
8. 重复测试其他分类

## 构建状态

✅ 构建成功，无错误
✅ 类型检查通过
✅ 所有分类名称已同步
✅ 代码已推送到 GitHub

## 相关文件

- `lib/categories.ts` - 分类配置（新建）
- `components/Header.tsx` - 导航菜单
- `app/products/page.tsx` - 商品列表页面
