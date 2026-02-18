import ProductCard from './ProductCard'

export default function RelatedProducts() {
  const relatedProducts = [
    {
      id: 2,
      name: 'Alice ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)',
      price: 580,
      image: '/images/products/product-2.jpg',
      badge: '2件9折、3件85折♥︎'
    },
    {
      id: 3,
      name: 'Emma ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)',
      price: 580,
      image: '/images/products/product-3.jpg',
      badge: '2件9折、3件85折♥︎'
    },
    {
      id: 4,
      name: '游籽 ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(黑)',
      price: 580,
      image: '/images/products/product-4.jpg',
      badge: '2件9折、3件85折♥︎'
    },
    {
      id: 5,
      name: '茜 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】',
      price: 580,
      image: '/images/products/product-5.jpg',
      badge: '2件9折、3件85折♥︎'
    },
  ]

  return (
    <section className="mt-16 border-t border-white/10 pt-12">
      <h2 className="text-xl text-white font-medium mb-6">相關商品</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
