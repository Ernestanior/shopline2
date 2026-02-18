'use client'

import { useState } from 'react'

const categories = [
  { id: 'all', name: '全部商品' },
  { id: 'corset', name: '束腰馬甲' },
  { id: 'bodysuit', name: '連體背心' },
  { id: 'bra-top', name: '蕾絲背心' },
  { id: 'set', name: '套裝組合' },
]

export default function CategoryFilter() {
  const [selected, setSelected] = useState('all')

  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelected(category.id)}
          className={`px-4 py-2 text-sm whitespace-nowrap border transition-colors ${
            selected === category.id
              ? 'border-black bg-black text-white'
              : 'border-[var(--color-border)] hover:border-black'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
