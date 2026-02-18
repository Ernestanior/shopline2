'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-4">訂閱電子報</h2>
        <p className="text-gray-300 mb-8">
          訂閱我們的電子報，獲取最新優惠資訊和新品上架通知
        </p>

        {subscribed ? (
          <div className="bg-white/10 text-white px-6 py-4 rounded-xs">
            感謝訂閱！我們會將最新資訊發送到您的信箱
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xs bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-xs hover:bg-gray-100 transition-colors"
            >
              訂閱
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
