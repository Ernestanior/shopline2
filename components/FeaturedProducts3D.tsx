'use client'

import Product3DCard from './Product3DCard'

const featuredProducts = [
  {
    id: 1,
    name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
    price: 590,
    image: '/images/products/product-1.jpg',
    badge: '熱銷'
  },
  {
    id: 15,
    name: '餘曦 ➷ 玫瑰雕花蕾絲網紗連體背心bodysuit',
    price: 590,
    image: '/images/products/product-15.jpg',
    badge: '新品'
  },
  {
    id: 18,
    name: 'Juliana ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(黑)',
    price: 590,
    image: '/images/products/product-18.jpg',
    badge: '推薦'
  },
  {
    id: 5,
    name: '茜 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·摩登街頭條紋西裝褲裙】',
    price: 580,
    image: '/images/products/product-5.jpg',
    badge: '套裝'
  }
]

export default function FeaturedProducts3D() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {featuredProducts.map((product) => (
        <Product3DCard key={product.id} {...product} />
      ))}
    </div>
  )
}
