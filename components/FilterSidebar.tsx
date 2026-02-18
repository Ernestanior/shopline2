'use client'

import { useState } from 'react'

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    '束腰馬甲',
    '連體背心',
    '蕾絲背心',
    '魚骨馬甲',
  ]

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">分類</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-4 h-4"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">價格範圍</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-[var(--color-text-secondary)]">
            <span>NT$ {priceRange[0]}</span>
            <span>NT$ {priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">尺寸</h3>
        <div className="flex flex-wrap gap-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              className="px-3 py-1 text-sm border border-[var(--color-border)] hover:border-black transition-colors"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full py-2 text-sm border border-[var(--color-border)] hover:border-black transition-colors">
        清除篩選
      </button>
    </div>
  )
}
