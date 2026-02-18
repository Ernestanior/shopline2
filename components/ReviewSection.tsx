'use client'

import { useState } from 'react'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  content: string
}

export default function ReviewSection() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      author: '小美',
      rating: 5,
      date: '2024-02-10',
      content: '質感很好，穿起來很舒服，版型也很好看！',
    },
    {
      id: 2,
      author: '小雅',
      rating: 4,
      date: '2024-02-08',
      content: '蕾絲很精緻，魚骨支撐效果不錯，推薦！',
    },
  ])

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <div className="border-t border-white/10 pt-8 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-white font-medium">顧客評價</h3>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= averageRating ? 'text-yellow-400' : 'text-white/20'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-white/60">
            {averageRating.toFixed(1)} ({reviews.length} 則評價)
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-white/10 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm text-white">{review.author}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-3 h-3 ${
                        star <= review.rating ? 'text-yellow-400' : 'text-white/20'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-xs text-white/60">{review.date}</span>
            </div>
            <p className="text-sm text-white/70">{review.content}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-3 text-sm border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition-all rounded">
        查看更多評價
      </button>
    </div>
  )
}
