'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description?: string
  sizes?: string[]
  colors?: string[]
}

interface QuickViewModalProps {
  product: Product
  onClose: () => void
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    // 禁止背景滚动
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    setAdded(true)
    
    // 触发storage事件以更新Header中的购物车数量
    window.dispatchEvent(new Event('storage'))
    
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#0a0a0a] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg animate-slideUp relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors rounded-full z-10"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* Image */}
          <div className="relative aspect-[2/3] bg-[#111111] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl text-white font-light mb-4 pr-8">
                {product.name}
              </h2>
              
              <div className="text-2xl text-white font-medium mb-6">
                NT$ {product.price.toLocaleString()}
              </div>

              {product.description && (
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <label className="block text-sm text-white mb-3">尺寸</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm border transition-all rounded ${
                          selectedSize === size
                            ? 'border-white bg-white text-black scale-105'
                            : 'border-white/20 text-white hover:border-white/40 hover:scale-105'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-6">
                  <label className="block text-sm text-white mb-3">顏色</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 text-sm border transition-all rounded ${
                          selectedColor === color
                            ? 'border-white bg-white text-black scale-105'
                            : 'border-white/20 text-white hover:border-white/40 hover:scale-105'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm text-white mb-3">數量</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all rounded"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-3 text-sm font-medium transition-all rounded ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                }`}
              >
                {added ? '✓ 已加入購物車' : '加入購物車'}
              </button>
              <Link
                href={`/products/${product.id}`}
                className="block w-full text-center py-3 text-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all rounded"
                onClick={onClose}
              >
                查看完整資訊
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
