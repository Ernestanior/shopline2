'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import QuickViewModal from './QuickViewModal'

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: string
  description?: string
  sizes?: string[]
  colors?: string[]
}

export default function ProductCard({ product }: { product: Product }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowQuickView(true)
  }

  return (
    <>
      <Link 
        href={`/products/${product.id}`} 
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[2/3] bg-[#111111] overflow-hidden mb-3 card-hover">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 bg-white text-black text-[10px] px-3 py-1.5 z-10 font-medium tracking-wide">
              {product.badge}
            </div>
          )}
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton"></div>
          )}
          
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Quick View Button */}
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button 
              onClick={handleQuickView}
              className="w-full bg-white text-black py-2 text-xs font-medium hover:bg-gray-100 transition-colors"
            >
              快速查看
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-xs md:text-sm text-white line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white">
              NT$ {product.price.toLocaleString()}
            </span>
            
            {/* Wishlist Icon */}
            <button 
              className="text-white/40 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                // Add to wishlist logic
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </Link>

      {/* Quick View Modal */}
      {showQuickView && (
        <QuickViewModal
          product={{
            ...product,
            description: '精選高品質材料，完美展現優雅曲線。舒適透氣，適合日常穿搭。',
            sizes: ['S', 'M', 'L', 'XL'],
            colors: ['黑色', '白色', '咖啡色']
          }}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  )
}
