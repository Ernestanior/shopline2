'use client'

import { useState } from 'react'
import Image from 'next/image'

interface VirtualTryOnProps {
  productImage: string
  productName: string
}

export default function VirtualTryOn({ productImage, productName }: VirtualTryOnProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState(1)

  const models = [
    { id: 1, name: '模特 A', bodyType: '標準身材', image: '/images/products/product-1.jpg' },
    { id: 2, name: '模特 B', bodyType: '纖瘦身材', image: '/images/products/product-2.jpg' },
    { id: 3, name: '模特 C', bodyType: '豐滿身材', image: '/images/products/product-3.jpg' }
  ]

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span className="text-sm">虛擬試穿</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#0a0a0a] border border-white/10 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-white text-xl font-medium mb-1">虛擬試穿</h2>
                <p className="text-white/60 text-sm">{productName}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Model Selection */}
              <div className="mb-6">
                <h3 className="text-white text-sm font-medium mb-3">選擇模特身材</h3>
                <div className="grid grid-cols-3 gap-4">
                  {models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      className={`relative aspect-[2/3] overflow-hidden transition-all ${
                        selectedModel === model.id
                          ? 'ring-2 ring-white scale-95'
                          : 'hover:scale-105'
                      }`}
                    >
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <div className="text-white text-xs font-medium">{model.name}</div>
                        <div className="text-white/60 text-xs">{model.bodyType}</div>
                      </div>
                      {selectedModel === model.id && (
                        <div className="absolute top-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          ✓
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="relative aspect-[2/3] bg-[#111111] rounded-lg overflow-hidden">
                <Image
                  src={models.find(m => m.id === selectedModel)?.image || models[0].image}
                  alt="Virtual try-on preview"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                
                {/* Info Badge */}
                <div className="absolute top-4 left-4 glass-effect rounded-lg px-3 py-2">
                  <div className="text-white text-xs font-medium">虛擬試穿效果</div>
                  <div className="text-white/60 text-xs">僅供參考</div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-4 p-4 glass-effect rounded-lg">
                <div className="flex items-start gap-2 text-sm text-white/80">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium mb-1">溫馨提示</div>
                    <div className="text-xs text-white/60">
                      虛擬試穿效果僅供參考，實際穿著效果可能因個人身材而異。建議參考尺寸表選擇合適尺碼。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
