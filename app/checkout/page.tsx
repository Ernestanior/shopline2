'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // 模拟订单创建
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 清空购物车
      clearCart()
      
      // 跳转到订单页面
      router.push('/orders?success=true')
    } catch (err: any) {
      setError(err.message || '訂單創建失敗，請稍後再試')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black gradient-mesh">
        <Header />
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="glass-effect rounded-lg p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="text-xl text-white mb-4">購物車是空的</h2>
            <p className="text-white/60 mb-6">請先添加商品到購物車</p>
            <Link
              href="/products"
              className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
            >
              前往購物
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <h1 className="text-2xl md:text-3xl text-white font-light mb-8">結帳</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 表单 */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-effect rounded-lg p-6 md:p-8">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded text-sm mb-6">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">電話</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                    placeholder="0912-345-678"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">地址</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                    placeholder="詳細地址"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">城市</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                      placeholder="台北市"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">郵遞區號</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                      placeholder="100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white">備註（選填）</label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                    placeholder="特殊需求或備註"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black py-4 rounded font-medium hover:bg-gray-100 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? '處理中...' : '確認訂單'}
                </button>
              </div>
            </form>
          </div>

          {/* 订单摘要 */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-lg p-6 sticky top-24">
              <h2 className="text-lg text-white font-medium mb-4">訂單摘要</h2>
              
              <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-white/80 flex-1 mr-2">{item.name}</span>
                    <span className="text-white">x{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">小計</span>
                  <span className="text-white">NT$ {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">運費</span>
                  <span className="text-white">免運</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">總計</span>
                <span className="text-xl text-white font-medium">NT$ {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
