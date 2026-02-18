'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function ProfilePage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile')

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-white font-light mb-8">我的帳戶</h1>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <nav className="glass-effect rounded-lg p-2 space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 text-sm transition-all rounded ${
                    activeTab === 'profile'
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  個人資料
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-3 text-sm transition-all rounded ${
                    activeTab === 'orders'
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  訂單記錄
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full text-left px-4 py-3 text-sm transition-all rounded ${
                    activeTab === 'addresses'
                      ? 'bg-white text-black'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  收貨地址
                </button>
              </nav>
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              {activeTab === 'profile' && (
                <div className="glass-effect rounded-lg p-6 md:p-8">
                  <h2 className="text-lg text-white font-medium mb-6">個人資料</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">姓名</label>
                      <input
                        type="text"
                        defaultValue={user?.name || ''}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">電子郵件</label>
                      <input
                        type="email"
                        defaultValue={user?.email || ''}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">電話</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded focus:outline-none focus:border-white/40 placeholder:text-white/40"
                        placeholder="0912-345-678"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
                    >
                      儲存變更
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="glass-effect rounded-lg p-6 md:p-8">
                  <h2 className="text-lg text-white font-medium mb-6">訂單記錄</h2>
                  <p className="text-sm text-white/60">尚無訂單記錄</p>
                  <Link
                    href="/products"
                    className="inline-block mt-4 bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
                  >
                    開始購物
                  </Link>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="glass-effect rounded-lg p-6 md:p-8">
                  <h2 className="text-lg text-white font-medium mb-6">收貨地址</h2>
                  <button className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded">
                    新增地址
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
