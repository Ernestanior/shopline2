import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Announcement Bar */}
      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        <Image
          src="/images/products/product-2.jpg"
          alt="About XYN"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-light">
            關於 XYN
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
              品牌故事
            </h2>
            <div className="w-16 h-px bg-white/20 mx-auto" />
          </div>
          <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed">
            <p>
              XYN 創立於 2020 年，專注於為現代女性打造優雅而性感的蕾絲束腰馬甲與時尚背心。我們相信，每位女性都應該擁有展現自信與魅力的權利。
            </p>
            <p>
              品牌名稱 XYN 象徵著現代女性如熔岩般熱情奔放的內在力量。我們致力於將傳統的束腰工藝與現代設計美學完美融合，創造出既優雅又實穿的時尚單品。
            </p>
            <p>
              每一件 XYN 產品都經過精心設計與嚴格品質把關，使用頂級蕾絲材料與專業魚骨支撐，確保穿著舒適的同時，完美修飾身形曲線。
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
              品牌理念
            </h2>
            <div className="w-16 h-px bg-white/20 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-white text-lg mb-2">品質至上</h3>
              <p className="text-white/60 text-sm">
                嚴選頂級材料，每件產品都經過嚴格品質檢驗
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg mb-2">用心設計</h3>
              <p className="text-white/60 text-sm">
                融合時尚與實用，打造最適合亞洲女性的版型
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-white/20 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg mb-2">貼心服務</h3>
              <p className="text-white/60 text-sm">
                提供專業穿搭建議與完善的售後服務
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
            聯絡我們
          </h2>
          <p className="text-white/60 text-sm mb-8">
            有任何問題或建議，歡迎隨時與我們聯繫
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 text-sm hover:bg-gray-100 transition-colors"
          >
            前往聯絡頁面
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
