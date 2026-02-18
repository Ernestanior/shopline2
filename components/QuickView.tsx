'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface QuickViewProps {
  product: Product
  onClose: () => void
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const [selectedSize, setSelectedSize] = useState('')
  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-xl font-normal pr-8">{product.name}</h2>
            <button onClick={onClose} className="hover:opacity-60 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[2/3] bg-[#f5f5f5] flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="space-y-6">
              <div className="text-2xl font-medium">NT$ {product.price.toLocaleString()}</div>

              <div>
                <label className="block mb-2 text-sm font-medium">尺寸</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-[var(--color-border)] hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 text-sm hover:bg-gray-800 transition-colors">
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
