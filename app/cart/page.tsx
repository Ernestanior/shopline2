'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'

export default function CartPage() {
  const { items: cartItems, updateItem, removeItem, total: subtotal } = useCart()

  const discount = cartItems.length >= 3 ? subtotal * 0.15 : cartItems.length >= 2 ? subtotal * 0.1 : 0
  const total = subtotal - discount

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      {/* Announcement Bar */}
      <div className="bg-white text-black text-center py-2 text-xs md:text-sm font-medium">
        2件9折、3件85折♥︎
      </div>

      {/* Cart Content */}
      <section className="px-4 md:px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl text-white font-light mb-8">購物車 ({cartItems.length})</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 glass-effect rounded-lg">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-white/60 mb-6">購物車是空的</p>
              <Link 
                href="/products"
                className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105"
              >
                繼續購物
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="glass-effect rounded-lg p-4 flex gap-4">
                    <div className="w-20 h-28 bg-white/5 flex-shrink-0 rounded overflow-hidden relative">
                      <Image
                        src={`/images/products/product-${item.id}.jpg`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm text-white mb-2 line-clamp-2">{item.name}</h3>
                      <p className="text-sm text-white font-medium mb-3">NT$ {item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateItem(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm rounded"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-sm text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateItem(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white/60 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="glass-effect rounded-lg p-6 sticky top-24">
                  <h2 className="text-lg text-white font-medium mb-4">訂單摘要</h2>
                  
                  <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">小計</span>
                      <span className="text-white">NT$ {subtotal.toLocaleString()}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-400">
                        <span>折扣 ({cartItems.length >= 3 ? '85折' : '9折'})</span>
                        <span>-NT$ {discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">運費</span>
                      <span className="text-white">免運</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white font-medium">總計</span>
                    <span className="text-xl text-white font-medium">NT$ {total.toLocaleString()}</span>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full bg-white text-black text-center py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 mb-3 rounded"
                  >
                    前往結帳
                  </Link>

                  <Link
                    href="/products"
                    className="block w-full text-center py-3 text-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all rounded"
                  >
                    繼續購物
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
