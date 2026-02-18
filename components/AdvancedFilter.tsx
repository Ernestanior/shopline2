'use client'

import { useState } from 'react'

interface FilterOption {
  id: string
  label: string
  count: number
}

interface AdvancedFilterProps {
  onFilterChange: (filters: any) => void
}

export default function AdvancedFilter({ onFilterChange }: AdvancedFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const categories: FilterOption[] = [
    { id: 'corset', label: '束腰馬甲', count: 8 },
    { id: 'bodysuit', label: '連體背心', count: 4 },
    { id: 'top', label: '背心上衣', count: 4 },
    { id: 'set', label: '套裝組合', count: 4 }
  ]

  const sizes: FilterOption[] = [
    { id: 'S', label: 'S', count: 15 },
    { id: 'M', label: 'M', count: 18 },
    { id: 'L', label: 'L', count: 16 },
    { id: 'XL', label: 'XL', count: 12 }
  ]

  const colors: FilterOption[] = [
    { id: 'black', label: '黑色', count: 12 },
    { id: 'white', label: '白色', count: 10 },
    { id: 'brown', label: '咖啡色', count: 6 },
    { id: 'gray', label: '灰色', count: 4 }
  ]

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const toggleSize = (id: string) => {
    setSelectedSizes(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const toggleColor = (id: string) => {
    setSelectedColors(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedSizes([])
    setSelectedColors([])
    setPriceRange([0, 2000])
  }

  const activeFiltersCount = selectedCategories.length + selectedSizes.length + selectedColors.length

  return (
    <div className="relative">
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:border-white/40 transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        <span className="text-sm">篩選</span>
        {activeFiltersCount > 0 && (
          <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 glass-effect rounded-lg p-6 shadow-2xl z-50 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-medium">篩選條件</h3>
            <button
              onClick={clearFilters}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              清除全部
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h4 className="text-white text-sm font-medium mb-3">商品分類</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="w-4 h-4 rounded border-white/20 bg-transparent"
                    />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {category.label}
                    </span>
                  </div>
                  <span className="text-white/40 text-xs">({category.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-white text-sm font-medium mb-3">價格範圍</h4>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="2000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>NT$ {priceRange[0]}</span>
                <span>NT$ {priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h4 className="text-white text-sm font-medium mb-3">尺寸</h4>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => toggleSize(size.id)}
                  className={`py-2 text-sm border transition-all ${
                    selectedSizes.includes(size.id)
                      ? 'border-white bg-white text-black'
                      : 'border-white/20 text-white hover:border-white/40'
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h4 className="text-white text-sm font-medium mb-3">顏色</h4>
            <div className="space-y-2">
              {colors.map((color) => (
                <label
                  key={color.id}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color.id)}
                      onChange={() => toggleColor(color.id)}
                      className="w-4 h-4 rounded border-white/20 bg-transparent"
                    />
                    <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {color.label}
                    </span>
                  </div>
                  <span className="text-white/40 text-xs">({color.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => {
              onFilterChange({
                categories: selectedCategories,
                priceRange,
                sizes: selectedSizes,
                colors: selectedColors
              })
              setIsOpen(false)
            }}
            className="w-full bg-white text-black py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            套用篩選
          </button>
        </div>
      )}
    </div>
  )
}
