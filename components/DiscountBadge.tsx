'use client'

import { useEffect, useState } from 'react'

interface DiscountBadgeProps {
  discount: number
  className?: string
}

export default function DiscountBadge({ discount, className = '' }: DiscountBadgeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      } ${className}`}
    >
      {/* Rotating Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-full animate-spin-slow" />
      
      {/* Badge Content */}
      <div className="relative bg-red-500 rounded-full px-4 py-2 shadow-lg">
        <div className="flex flex-col items-center">
          <span className="text-white text-xs font-medium leading-none">省</span>
          <span className="text-white text-lg font-bold leading-none">{discount}%</span>
        </div>
      </div>

      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20" />
    </div>
  )
}
