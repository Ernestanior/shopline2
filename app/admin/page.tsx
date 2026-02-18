'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products')

  return (
    <main className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-light tracking-wider">
              MOLAVA
            </Link>
            <span className="text-sm text-[var(--color-text-secondary)]">管理後台</span>
          </div>
          <Link href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-black">
            返回商店
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-[var(--color-border)]">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'products'
                ? 'border-black text-black'
                : 'border-transparent text-[var(--color-text-secondary)] hover:text-black'
            }`}
          >
            商品管理
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'orders'
                ? 'border-black text-black'
                : 'border-transparent text-[var(--color-text-secondary)] hover:text-black'
            }`}
          >
            訂單管理
          </button>
        </div>

        {/* Content */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-md shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">商品列表</h2>
              <button className="bg-black text-white px-6 py-2 rounded-xs hover:bg-[var(--color-text-primary)] transition-colors">
                新增商品
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-3 px-4 font-medium">ID</th>
                    <th className="text-left py-3 px-4 font-medium">商品名稱</th>
                    <th className="text-left py-3 px-4 font-medium">價格</th>
                    <th className="text-left py-3 px-4 font-medium">庫存</th>
                    <th className="text-left py-3 px-4 font-medium">狀態</th>
                    <th className="text-left py-3 px-4 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">沙漏曲線蕾絲魚骨束腰馬甲背心</td>
                    <td className="py-3 px-4">NT$ 590</td>
                    <td className="py-3 px-4">50</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        上架中
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-sm text-blue-600 hover:underline">編輯</button>
                        <button className="text-sm text-red-600 hover:underline">刪除</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-md shadow-sm p-6">
            <h2 className="text-2xl font-medium mb-6">訂單列表</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-3 px-4 font-medium">訂單編號</th>
                    <th className="text-left py-3 px-4 font-medium">客戶</th>
                    <th className="text-left py-3 px-4 font-medium">金額</th>
                    <th className="text-left py-3 px-4 font-medium">狀態</th>
                    <th className="text-left py-3 px-4 font-medium">日期</th>
                    <th className="text-left py-3 px-4 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="py-3 px-4">ORD1234567890</td>
                    <td className="py-3 px-4">customer@email.com</td>
                    <td className="py-3 px-4">NT$ 1,180</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        處理中
                      </span>
                    </td>
                    <td className="py-3 px-4">2024-02-16</td>
                    <td className="py-3 px-4">
                      <button className="text-sm text-blue-600 hover:underline">查看</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
