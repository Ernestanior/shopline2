// 商品分类配置
export const CATEGORIES = {
  ALL: '全部',
  CORSET: '束腰馬甲',
  BODYSUIT: '連體背心',
  VEST: '背心上衣',
  SET: '套裝組合',
} as const

export type CategoryKey = keyof typeof CATEGORIES
export type CategoryValue = typeof CATEGORIES[CategoryKey]

// 分类列表（用于筛选按钮）
export const CATEGORY_LIST: CategoryValue[] = [
  CATEGORIES.ALL,
  CATEGORIES.CORSET,
  CATEGORIES.BODYSUIT,
  CATEGORIES.VEST,
  CATEGORIES.SET,
]

// Header 下拉菜单的分类配置
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
