'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useState, useEffect } from 'react'

const allProducts = [
  { id: 1, name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心', price: 590, image: '/images/products/product-1.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 2, name: 'Alice ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)', price: 580, image: '/images/products/product-2.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 3, name: 'Emma ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)', price: 580, image: '/images/products/product-3.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 4, name: '游籽 ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(黑)', price: 580, image: '/images/products/product-4.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 15, name: '餘曦 ➷ 玫瑰雕花蕾絲網紗連體背心bodysuit', price: 590, image: '/images/products/product-15.jpg', badge: '2件9折、3件85折♥︎', category: '連體背心' },
  { id: 18, name: 'Juliana ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(黑)', price: 590, image: '/images/products/product-18.jpg', badge: '2件9折、3件85折♥︎', category: '背心' },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState(allProducts)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults(allProducts)
      return
    }

    setIsSearching(true)
    const timer = setTimeout(() => {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Announcement Bar */}
      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      {/* Search Section */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl text-white font-light mb-4 text-gradient">
              搜索商品
            </h1>
            <p className="text-white/60 text-sm">
              探索我們的精選系列
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12">
            <div className="relative glass-effect rounded-lg overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索商品名稱或分類..."
                className="w-full bg-transparent text-white px-6 py-4 pr-12 text-base focus:outline-none placeholder:text-white/40"
                autoFocus
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Popular Searches */}
          {searchQuery === '' && (
            <div className="mb-12">
              <h3 className="text-white text-sm mb-4">熱門搜索</h3>
              <div className="flex flex-wrap gap-2">
                {['束腰馬甲', '連體背心', '背心', '蕾絲', '黑色', '白色'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-4 py-2 text-xs border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors rounded-full"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-lg">
                {searchQuery ? `搜索結果 (${results.length})` : '所有商品'}
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-white/60 text-sm mb-2">找不到相關商品</p>
                <p className="text-white/40 text-xs">試試其他關鍵字</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
