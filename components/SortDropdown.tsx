'use client'

import { useState } from 'react'

const sortOptions = [
  { value: 'newest', label: '最新上架' },
  { value: 'price-low', label: '價格：低到高' },
  { value: 'price-high', label: '價格：高到低' },
  { value: 'popular', label: '最受歡迎' },
]

export default function SortDropdown() {
  const [selected, setSelected] = useState('newest')
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = sortOptions.find(opt => opt.value === selected)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] hover:border-black transition-colors"
      >
        <span className="text-sm">{selectedOption?.label}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-[var(--color-border)] shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelected(option.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-[#f5f5f5] transition-colors ${
                selected === option.value ? 'bg-[#f5f5f5]' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
