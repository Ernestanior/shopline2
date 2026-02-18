'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'

function OrdersContent() {
  const searchParams = useSearchParams()
  const [showSuccess, setShowSuccess] = useState(false)
  
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [searchParams])

  const orders = [
    {
      id: 1,
      orderNumber: 'ORD1234567890',
      totalAmount: 1180,
      status: 'pending',
      createdAt: '2024-02-16',
    }
  ]

  const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
      pending: '處理中',
      processing: '配送中',
      completed: '已完成',
      cancelled: '已取消',
    }
    return statusMap[status] || status
  }

  const getStatusColor = (status: string) => {
    const colorMap: Record<string, string> = {
      pending: 'bg-yellow-500/20 text-yellow-200 border-yellow-500/50',
      processing: 'bg-blue-500/20 text-blue-200 border-blue-500/50',
      completed: 'bg-green-500/20 text-green-200 border-green-500/50',
      cancelled: 'bg-red-500/20 text-red-200 border-red-500/50',
    }
    return colorMap[status] || 'bg-white/10 text-white/60 border-white/20'
  }

  return (
    <main className="min-h-screen bg-black gradient-mesh">
      <Header />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <h1 className="text-2xl md:text-3xl text-white font-light mb-8">我的訂單</h1>

        {showSuccess && (
          <div className="glass-effect rounded-lg p-4 mb-6 border border-green-500/50 bg-green-500/20">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-green-200 font-medium">訂單已成功創建！</p>
                <p className="text-green-300/80 text-sm">我們會盡快處理您的訂單</p>
              </div>
            </div>
          </div>
        )}

        {orders.length === 0 ? (
          <div className="glass-effect rounded-lg p-12 text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-white/60 mb-6">尚無訂單</p>
            <Link
              href="/products"
              className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 rounded"
            >
              開始購物
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="glass-effect rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <p className="text-sm text-white/60 mb-1">
                      訂單編號: <span className="text-white">{order.orderNumber}</span>
                    </p>
                    <p className="text-sm text-white/60">
                      下單日期: <span className="text-white">{order.createdAt}</span>
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded border ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-sm text-white/60">總金額: </span>
                    <span className="text-lg text-white font-medium">NT$ {order.totalAmount.toLocaleString()}</span>
                  </div>
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-sm text-white hover:text-white/80 transition-colors"
                  >
                    查看詳情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}


export default function OrdersPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black gradient-mesh">
        <Header />
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="text-center text-white">載入中...</div>
        </section>
        <Footer />
      </main>
    }>
      <OrdersContent />
    </Suspense>
  )
}
