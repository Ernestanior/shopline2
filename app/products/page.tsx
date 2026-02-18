'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const allProducts = [
  { id: 1, name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心', price: 590, image: '/images/products/product-1.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 2, name: 'Alice ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)', price: 580, image: '/images/products/product-2.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 3, name: 'Emma ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)', price: 580, image: '/images/products/product-3.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 4, name: '游籽 ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(黑)', price: 580, image: '/images/products/product-4.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 5, name: '茜 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·摩登街頭條紋西裝褲裙】', price: 580, image: '/images/products/product-5.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 6, name: 'Bonita ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·極辣長腿御姊風修身包臀裙褲裙】', price: 580, image: '/images/products/product-6.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 7, name: 'Hailey ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)', price: 580, image: '/images/products/product-7.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 8, name: '純 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附雙腰帶·美式學姊風修身包臀裙褲裙】', price: 580, image: '/images/products/product-8.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 9, name: 'TZU ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)', price: 580, image: '/images/products/product-9.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 10, name: '璇 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】', price: 580, image: '/images/products/product-10.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 11, name: '【3色·背扣版】沙漏曲線蕾絲魚骨束腰馬甲背心', price: 580, image: '/images/products/product-11.jpg', badge: '2件9折、3件85折♥︎', category: '束腰馬甲' },
  { id: 12, name: '丸 ➷ 【街頭酷辣公式俐落拉鍊寬鬆皮外套】/【玫瑰雕花蕾絲網紗連體背心bodysuit】/【美式辣妹側拉鍊開衩低腰褲裙】', price: 590, image: '/images/products/product-12.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 13, name: 'Rosa ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】', price: 590, image: '/images/products/product-13.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 14, name: 'CC ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附明線腰帶·摩登街頭彈力工裝短褲】', price: 590, image: '/images/products/product-14.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
  { id: 15, name: '餘曦 ➷ 玫瑰雕花蕾絲網紗連體背心bodysuit', price: 590, image: '/images/products/product-15.jpg', badge: '2件9折、3件85折♥︎', category: '連體背心' },
  { id: 16, name: '【1色】玫瑰雕花蕾絲網紗連體背心bodysuit', price: 590, image: '/images/products/product-16.jpg', badge: '2件9折、3件85折♥︎', category: '連體背心' },
  { id: 17, name: 'Lucy ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(灰)', price: 590, image: '/images/products/product-17.jpg', badge: '2件9折、3件85折♥︎', category: '背心' },
  { id: 18, name: 'Juliana ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(黑)', price: 590, image: '/images/products/product-18.jpg', badge: '2件9折、3件85折♥︎', category: '背心' },
  { id: 19, name: '寶嵐 ➷ 可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop(白)', price: 590, image: '/images/products/product-19.jpg', badge: '2件9折、3件85折♥︎', category: '背心' },
  { id: 20, name: 'Jennie ➷【可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop】/【附雕刻腰帶·酷辣Y2K骷髏卯釘豐胯低腰短褲】', price: 590, image: '/images/products/product-20.jpg', badge: '2件9折、3件85折♥︎', category: '套裝' },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [sortBy, setSortBy] = useState('default')

  // 当 URL 参数变化时更新选中的分类
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [categoryFromUrl])

  const categories = ['全部', '束腰馬甲', '連體背心', '背心', '套裝']

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === '全部' 
      ? allProducts 
      : allProducts.filter(p => p.category === selectedCategory)

    const sorted = [...filtered]
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price)
    }

    return sorted
  }, [selectedCategory, sortBy])

  return (
    <>
      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      <section className="py-8 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-white font-light mb-2">
            {selectedCategory === '全部' ? '所有商品' : selectedCategory}
          </h1>
          <p className="text-white/60 text-sm">
            共 {filteredAndSortedProducts.length} 件商品
          </p>
        </div>
      </section>

      <section className="py-4 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 border transition-all whitespace-nowrap rounded ${
                  selectedCategory === cat
                    ? 'border-white bg-white text-black'
                    : 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm bg-white/10 border border-white/20 text-white px-3 py-1.5 focus:outline-none focus:border-white/40 rounded"
          >
            <option value="default" className="bg-black">預設排序</option>
            <option value="price-asc" className="bg-black">價格：低到高</option>
            <option value="price-desc" className="bg-black">價格：高到低</option>
          </select>
        </div>
      </section>

      <section className="px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white">載入中...</div>
        </div>
      }>
        <ProductsContent />
      </Suspense>
      <Footer />
    </main>
  )
}
