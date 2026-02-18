import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export default function WishlistPage() {
  const wishlistItems = [
    {
      id: 1,
      name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
      price: 590,
      image: '/images/products/product-1.jpg',
      badge: '2件9折、3件85折♥︎'
    },
  ]

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      <section className="px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-white font-light mb-8">我的收藏 ({wishlistItems.length})</h1>

          {wishlistItems.length === 0 ? (
            <div className="glass-effect rounded-lg p-12 text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-white/60 mb-6">尚無收藏商品</p>
              <Link
                href="/products"
                className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
              >
                開始購物
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
