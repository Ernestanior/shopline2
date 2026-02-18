'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  features: string[]
}

interface ProductComparisonProps {
  products: Product[]
}

export default function ProductComparison({ products }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  const toggleProduct = (id: number) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(p => p !== id))
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, id])
    }
  }

  const compareProducts = products.filter(p => selectedProducts.includes(p.id))

  return (
    <div className="space-y-6">
      {/* Product Selection */}
      <div>
        <h3 className="text-white text-lg font-medium mb-4">
          選擇商品進行比較 ({selectedProducts.length}/3)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => toggleProduct(product.id)}
              className={`relative aspect-[2/3] overflow-hidden transition-all duration-300 ${
                selectedProducts.includes(product.id)
                  ? 'ring-2 ring-white scale-95'
                  : 'hover:scale-105'
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {selectedProducts.includes(product.id) && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {compareProducts.length > 0 && (
        <div className="glass-effect rounded-lg p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/60 py-3 px-4">項目</th>
                {compareProducts.map((product) => (
                  <th key={product.id} className="text-center py-3 px-4">
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="text-white text-xs line-clamp-2">
                      {product.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="text-white/60 py-3 px-4">價格</td>
                {compareProducts.map((product) => (
                  <td key={product.id} className="text-center text-white py-3 px-4">
                    NT$ {product.price.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/10">
                <td className="text-white/60 py-3 px-4">評分</td>
                {compareProducts.map((product) => (
                  <td key={product.id} className="text-center py-3 px-4">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-yellow-400' : 'text-white/20'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              {compareProducts[0]?.features.map((_, index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="text-white/60 py-3 px-4">特色 {index + 1}</td>
                  {compareProducts.map((product) => (
                    <td key={product.id} className="text-center text-white/80 py-3 px-4 text-xs">
                      {product.features[index] || '-'}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-3 px-4"></td>
                {compareProducts.map((product) => (
                  <td key={product.id} className="text-center py-3 px-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-block bg-white text-black px-4 py-2 text-xs hover:bg-gray-100 transition-colors"
                    >
                      查看詳情
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
