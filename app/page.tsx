import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/ProductGrid'
import BackToTop from '@/components/BackToTop'
import CursorGlow from '@/components/CursorGlow'
import HeroSection from '@/components/HeroSection'
import CountdownTimer from '@/components/CountdownTimer'
import ParallaxSection from '@/components/ParallaxSection'
import FeaturedProducts3D from '@/components/FeaturedProducts3D'
import TestimonialsSection from '@/components/TestimonialsSection'
import InstagramGallery from '@/components/InstagramGallery'
import AnnouncementBar from '@/components/AnnouncementBar'
import PromoBanner from '@/components/PromoBanner'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollReveal from '@/components/ScrollReveal'
import LiveNotifications from '@/components/LiveNotifications'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // 设置优惠结束时间（7天后）
  const saleEndDate = new Date()
  saleEndDate.setDate(saleEndDate.getDate() + 7)

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <ScrollProgress />
      <CursorGlow />
      <Header />

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Hero Banner */}
      <HeroSection />

      {/* Flash Sale Section */}
      <ScrollReveal>
        <section className="py-12 px-4 md:px-6 border-b border-[var(--color-border)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-white font-light mb-4">
                  限時搶購
                </h2>
                <p className="text-white/60 text-sm md:text-base mb-6">
                  精選商品限時優惠，數量有限，售完為止
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
                >
                  立即選購
                </Link>
              </div>
              <CountdownTimer endDate={saleEndDate} title="優惠倒計時" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Category Navigation */}
      <section className="py-12 px-4 md:px-6 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-white text-center mb-8 font-light">
            商品分類
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '束腰馬甲', image: '/images/products/product-1.jpg', count: 8 },
              { name: '連體背心', image: '/images/products/product-15.jpg', count: 4 },
              { name: '背心上衣', image: '/images/products/product-18.jpg', count: 4 },
              { name: '套裝組合', image: '/images/products/product-5.jpg', count: 4 },
            ].map((category) => (
              <Link 
                key={category.name}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-lg md:text-xl font-light mb-1">{category.name}</h3>
                  <p className="text-xs text-white/80">{category.count} 件商品</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Brand Story */}
      <ParallaxSection
        imageUrl="/images/products/product-12.jpg"
        speed={0.5}
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white font-light mb-6">
            XYN 品牌故事
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
            XYN 致力於打造展現女性優雅曲線的高品質服飾。
            每一件作品都經過精心設計，選用頂級蕾絲與舒適面料，
            讓您在任何場合都能自信展現獨特魅力。
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
          >
            了解更多
          </Link>
        </div>
      </ParallaxSection>

      {/* Featured 3D Products */}
      <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
              精選推薦
            </h2>
            <p className="text-white/60 text-sm">
              本季最受歡迎的設計，為您精心挑選
            </p>
          </div>
          <FeaturedProducts3D />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl text-white font-light">
              精選商品
            </h2>
            <Link 
              href="/products" 
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              查看全部 →
            </Link>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-white text-sm md:text-base mb-2">全台免運</h3>
              <p className="text-white/60 text-xs md:text-sm">滿額即享免運優惠</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white text-sm md:text-base mb-2">品質保證</h3>
              <p className="text-white/60 text-xs md:text-sm">嚴選高品質材料</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-white text-sm md:text-base mb-2">7天鑑賞期</h3>
              <p className="text-white/60 text-xs md:text-sm">不滿意可退換貨</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Promo Banner */}
      <PromoBanner
        title="新會員專屬優惠"
        subtitle="立即註冊成為會員，首次購物享9折優惠，更多會員專屬福利等你來領取"
        ctaText="立即註冊"
        ctaLink="/register"
        imageUrl="/images/products/product-12.jpg"
        theme="dark"
      />

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
            訂閱電子報
          </h2>
          <p className="text-white/60 text-sm mb-8">
            第一時間獲取新品上架與優惠資訊
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="輸入您的電子郵件"
              className="flex-1 bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/40 placeholder:text-white/40"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              訂閱
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <LiveNotifications />
    </main>
  )
}
