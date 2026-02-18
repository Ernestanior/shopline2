'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface StickyAddToCartProps {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  onAddToCart: () => void
}

export default function StickyAddToCart({ product, onAddToCart }: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when scrolled past 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm truncate">{product.name}</h3>
              <p className="text-white/80 text-sm font-medium">
                NT$ {product.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={onAddToCart}
            className="bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap flex-shrink-0"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  )
}
