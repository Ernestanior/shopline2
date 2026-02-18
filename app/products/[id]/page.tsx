'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageGallery from '@/components/ImageGallery'
import ReviewSection from '@/components/ReviewSection'
import RelatedProducts from '@/components/RelatedProducts'
import SizeGuide from '@/components/SizeGuide'
import Breadcrumb from '@/components/Breadcrumb'
import BackToTop from '@/components/BackToTop'
import CursorGlow from '@/components/CursorGlow'
import ScrollProgress from '@/components/ScrollProgress'
import StickyAddToCart from '@/components/StickyAddToCart'
import { useState, useEffect } from 'react'
import { useCart } from '@/hooks/useCart'
import { use } from 'react'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [stock, setStock] = useState(12)
  const [addedToCart, setAddedToCart] = useState(false)
  const [viewCount, setViewCount] = useState(0)

  const product = {
    id: parseInt(id),
    name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
    price: 590,
    originalPrice: 890,
    discount: 34,
    description: '精緻蕾絲設計，魚骨支撐，完美塑造沙漏曲線。前扣設計方便穿脫，適合日常搭配。採用頂級蕾絲材質，透氣舒適，展現優雅氣質。',
    badge: '2件9折、3件85折♥︎',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['黑色', '白色'],
    image: `/images/products/product-${id}.jpg`,
    images: [
      `/images/products/product-${id}.jpg`,
      `/images/products/product-${(parseInt(id) % 20) + 1}.jpg`,
      `/images/products/product-${((parseInt(id) + 1) % 20) + 1}.jpg`,
      `/images/products/product-${((parseInt(id) + 2) % 20) + 1}.jpg`
    ],
    details: [
      '材質：頂級蕾絲 + 高彈性布料',
      '特色：魚骨支撐、前扣設計、透氣舒適',
      '適合場合：日常、約會、派對、特殊場合',
      '保養方式：手洗冷水、陰乾、不可漂白',
      '產地：台灣設計、精心製作',
      '尺碼建議：請參考尺寸表選擇'
    ],
    features: [
      { icon: '✨', title: '頂級材質', desc: '精選高品質蕾絲' },
      { icon: '🎀', title: '完美剪裁', desc: '展現優雅曲線' },
      { icon: '💝', title: '舒適透氣', desc: '全天候舒適穿著' },
      { icon: '🌟', title: '精緻工藝', desc: '每個細節都完美' }
    ]
  }

  useEffect(() => {
    // 模擬瀏覽人數
    const count = Math.floor(Math.random() * 50) + 20
    setViewCount(count)
    
    // 模擬庫存變化
    const interval = setInterval(() => {
      setStock(prev => Math.max(5, prev - Math.floor(Math.random() * 2)))
    }, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    setAddedToCart(true)
    
    // 触发storage事件以更新Header中的购物车数量
    window.dispatchEvent(new Event('storage'))
    
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <ScrollProgress />
      <CursorGlow />
      <Header />

      {/* Announcement Bar */}
      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        {product.badge}
      </div>

      {/* Product Detail */}
      <section className="px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: '首頁', href: '/' },
            { label: '商品', href: '/products' },
            { label: product.name }
          ]} />

          {/* Live Stats */}
          <div className="flex items-center gap-6 mb-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>{viewCount} 人正在瀏覽</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>今日已售 {Math.floor(Math.random() * 20) + 10} 件</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <ImageGallery images={product.images} />
              
              {/* Trust Badges */}
              <div className="grid grid-cols-4 gap-3 pt-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="glass-effect rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">{feature.icon}</div>
                    <div className="text-white text-xs font-medium mb-1">{feature.title}</div>
                    <div className="text-white/60 text-[10px]">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Title & Price */}
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                  {product.name}
                </h1>
                
                {/* Price with Animation */}
                <div className="flex items-end gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-white font-medium">
                      NT$ {product.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-white/40 line-through">
                      NT$ {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                    省 {product.discount}%
                  </div>
                </div>

                {/* Stock Warning */}
                {stock < 10 && (
                  <div className="flex items-center gap-2 text-sm text-orange-400 animate-pulse">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>僅剩 {stock} 件！</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-white/80 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm text-white font-medium">選擇尺寸</label>
                  <SizeGuide />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm border transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-white bg-white text-black scale-105'
                          : 'border-white/20 text-white hover:border-white/40 hover:scale-105'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block mb-3 text-sm text-white font-medium">選擇顏色</label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`flex-1 py-3 text-sm border transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-white bg-white text-black scale-105'
                          : 'border-white/20 text-white hover:border-white/40 hover:scale-105'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block mb-3 text-sm text-white font-medium">數量</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-white text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                    className="w-12 h-12 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    +
                  </button>
                  <span className="text-sm text-white/60 ml-2">
                    最多 {stock} 件
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className={`w-full py-4 text-sm font-medium transition-all duration-300 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {addedToCart ? '✓ 已加入購物車' : '加入購物車'}
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 text-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    加入收藏
                  </button>
                  <button className="py-3 text-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    分享
                  </button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="glass-effect rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <div>
                    <div className="font-medium text-white mb-1">全台免運</div>
                    <div className="text-xs text-white/60">訂單滿 NT$ 500 即享免運優惠</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <div>
                    <div className="font-medium text-white mb-1">7天鑑賞期</div>
                    <div className="text-xs text-white/60">不滿意可退換貨（需保持商品完整）</div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-sm text-white font-medium mb-4">商品詳情</h3>
                <ul className="space-y-2.5 text-sm text-white/70">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-white/40 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <ReviewSection />
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <RelatedProducts />
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart */}
      <StickyAddToCart
        product={{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        }}
        onAddToCart={handleAddToCart}
      />

      <Footer />
      <BackToTop />
    </main>
  )
}
