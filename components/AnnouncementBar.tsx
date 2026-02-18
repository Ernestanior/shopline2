'use client'

import { useState, useEffect } from 'react'

const announcements = [
  '2件9折、3件85折♥︎',
  '新品上市 · 限時優惠中',
  '全台免運 · 7天鑑賞期',
  '加入會員享更多優惠'
]

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-white text-black text-center py-2 text-xs md:text-sm font-medium overflow-hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center hover:bg-black/10 rounded-full transition-colors z-10"
        aria-label="Close announcement"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Announcements */}
      <div className="relative h-6 flex items-center justify-center">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              index === currentIndex
                ? 'opacity-100 translate-y-0'
                : index < currentIndex
                ? 'opacity-0 -translate-y-full'
                : 'opacity-0 translate-y-full'
            }`}
          >
            {announcement}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/10">
        <div
          className="h-full bg-black transition-all duration-[4000ms] ease-linear"
          style={{
            width: '100%',
            animation: 'progress 4s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
