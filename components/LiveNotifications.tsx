'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Notification {
  id: number
  user: string
  product: string
  image: string
  location: string
  time: string
}

const notifications: Notification[] = [
  { id: 1, user: '小美', product: '沙漏曲線蕾絲魚骨束腰馬甲背心', image: '/images/products/product-1.jpg', location: '台北', time: '2分鐘前' },
  { id: 2, user: 'Yuki', product: '玫瑰雕花蕾絲網紗連體背心', image: '/images/products/product-15.jpg', location: '台中', time: '5分鐘前' },
  { id: 3, user: 'Emma', product: '法式高冷蕾絲拼接排釦背心', image: '/images/products/product-18.jpg', location: '高雄', time: '8分鐘前' },
  { id: 4, user: '小雅', product: '束腰馬甲套裝組合', image: '/images/products/product-5.jpg', location: '桃園', time: '12分鐘前' },
]

export default function LiveNotifications() {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
      setCurrentNotification(randomNotification)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000)

    // Show random notifications every 15-30 seconds
    const interval = setInterval(() => {
      showNotification()
    }, Math.random() * 15000 + 15000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!currentNotification) return null

  return (
    <div
      className={`fixed bottom-24 left-4 md:left-8 z-40 max-w-sm transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="glass-effect rounded-lg p-4 shadow-2xl border border-white/10">
        <div className="flex items-start gap-3">
          {/* Product Image */}
          <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
            <Image
              src={currentNotification.image}
              alt={currentNotification.product}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">
                {currentNotification.user}
              </span>
              <span className="text-white/60 text-xs">
                來自 {currentNotification.location}
              </span>
            </div>
            <p className="text-white/80 text-xs mb-1 line-clamp-2">
              剛購買了 {currentNotification.product}
            </p>
            <span className="text-white/40 text-xs">
              {currentNotification.time}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/40 hover:text-white/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
