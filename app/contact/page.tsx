'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl text-white font-light mb-12 text-center">聯絡我們</h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-effect rounded-lg p-6 md:p-8">
            <h2 className="text-2xl text-white font-light mb-6">聯絡資訊</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-white mb-2">客服信箱</h3>
                <p className="text-white/70">
                  support@xyn.tw
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">客服時間</h3>
                <p className="text-white/70">
                  週一至週五 10:00 - 18:00<br />
                  週六 10:00 - 17:00<br />
                  週日及國定假日休息
                </p>
              </div>

              <div>
                <h3 className="font-medium text-white mb-2">社群媒體</h3>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-6 md:p-8">
            <h2 className="text-2xl text-white font-light mb-6">發送訊息</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded text-sm">
                  訊息已送出，我們會盡快回覆您！
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm font-medium text-white">姓名</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                  placeholder="您的姓名"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">電子郵件</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">主旨</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                  placeholder="訊息主旨"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white">訊息內容</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                  placeholder="請輸入您的訊息..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded font-medium hover:bg-gray-100 transition-all hover:scale-105"
              >
                送出訊息
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
