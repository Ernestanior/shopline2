'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = {
    id: parseInt(params.id),
    orderNumber: 'ORD1234567890',
    status: 'pending',
    createdAt: '2024-02-16',
    items: [
      {
        id: 1,
        name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
        price: 590,
        quantity: 2,
        image: '/images/products/product-1.jpg'
      }
    ],
    subtotal: 1180,
    discount: 118,
    shipping: 0,
    total: 1062,
    shippingAddress: {
      name: '測試用戶',
      phone: '0912-345-678',
      address: '台北市信義區信義路五段7號',
      city: '台北市',
      postalCode: '110'
    }
  }

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

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="mb-6">
          <Link href="/orders" className="text-sm text-white/60 hover:text-white transition-colors">
            ← 返回訂單列表
          </Link>
        </div>

        <div className="glass-effect rounded-lg p-6 md:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl text-white font-light mb-2">訂單詳情</h1>
              <p className="text-sm text-white/60">
                訂單編號: <span className="text-white">{order.orderNumber}</span>
              </p>
              <p className="text-sm text-white/60">
                下單時間: <span className="text-white">{order.createdAt}</span>
              </p>
            </div>
            <span className={`px-4 py-2 text-sm rounded border ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h2 className="text-lg text-white font-medium mb-4">訂單商品</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-20 h-28 bg-white/10 rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-white mb-2">{item.name}</h3>
                    <p className="text-sm text-white/60 mb-2">數量: {item.quantity}</p>
                    <p className="text-sm text-white font-medium">NT$ {item.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">
                      NT$ {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 mt-6 pt-6">
            <div className="space-y-3 max-w-md ml-auto">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">小計</span>
                <span className="text-white">NT$ {order.subtotal.toLocaleString()}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-sm text-green-400">
                  <span>折扣</span>
                  <span>-NT$ {order.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-white/60">運費</span>
                <span className="text-white">{order.shipping === 0 ? '免運' : `NT$ ${order.shipping}`}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="text-white font-medium">總計</span>
                <span className="text-xl text-white font-medium">NT$ {order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-lg p-6 md:p-8">
          <h2 className="text-lg text-white font-medium mb-4">收貨資訊</h2>
          <div className="space-y-2 text-sm">
            <p className="text-white/60">
              收件人: <span className="text-white">{order.shippingAddress.name}</span>
            </p>
            <p className="text-white/60">
              電話: <span className="text-white">{order.shippingAddress.phone}</span>
            </p>
            <p className="text-white/60">
              地址: <span className="text-white">
                {order.shippingAddress.postalCode} {order.shippingAddress.city} {order.shippingAddress.address}
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
