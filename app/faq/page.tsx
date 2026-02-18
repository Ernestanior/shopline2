'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

const faqs = [
  {
    category: '訂購相關',
    items: [
      { question: '如何下訂單？', answer: '選擇商品後點擊「加入購物車」，完成選購後進入購物車結帳即可。' },
      { question: '可以修改或取消訂單嗎？', answer: '訂單成立後 24 小時內可以聯繫客服修改或取消。超過時間則無法修改。' },
      { question: '有最低消費金額嗎？', answer: '沒有最低消費限制，但建議購買 2 件以上享有折扣優惠。' },
    ]
  },
  {
    category: '配送相關',
    items: [
      { question: '配送需要多久時間？', answer: '一般配送時間為 3-5 個工作天，偏遠地區可能需要 5-7 個工作天。' },
      { question: '運費如何計算？', answer: '單筆訂單滿 NT$ 500 免運費，未滿則收取 NT$ 100 運費。' },
      { question: '可以指定配送時間嗎？', answer: '目前暫不提供指定配送時間服務，但會在配送前一天通知您。' },
    ]
  },
  {
    category: '退換貨相關',
    items: [
      { question: '退換貨政策是什麼？', answer: '商品到貨 7 天內可申請退換貨，商品需保持全新未使用狀態。' },
      { question: '如何申請退換貨？', answer: '請聯繫客服提供訂單編號和退換貨原因，我們會協助您處理。' },
      { question: '退款需要多久時間？', answer: '收到退貨商品後 7-14 個工作天內完成退款作業。' },
    ]
  },
  {
    category: '商品相關',
    items: [
      { question: '如何選擇尺寸？', answer: '每個商品頁面都有詳細的尺寸表，建議參考尺寸表選擇合適的尺寸。' },
      { question: '商品材質是什麼？', answer: '我們使用高品質蕾絲和彈性布料，具體材質請參考商品詳情頁。' },
      { question: '如何保養商品？', answer: '建議手洗並陰乾，避免使用漂白劑和烘乾機。' },
    ]
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl text-white font-light mb-8 text-center">常見問題</h1>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-lg text-white font-medium mb-4 pb-2 border-b border-white/10">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const index = `${categoryIndex}-${itemIndex}`
                    const isOpen = openIndex === index

                    return (
                      <div key={index} className="glass-effect rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="font-medium text-sm text-white">{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-white/60 transition-transform flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-sm text-white/70">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-effect rounded-lg p-6 text-center">
            <h3 className="font-medium text-white mb-2">還有其他問題？</h3>
            <p className="text-sm text-white/60 mb-4">
              如果以上答案無法解決您的問題，歡迎聯繫我們的客服團隊
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
            >
              聯繫客服
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
