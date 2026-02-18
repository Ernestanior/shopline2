'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: '小美',
    avatar: '/images/products/product-1.jpg',
    rating: 5,
    comment: '質感超好！穿起來非常舒適，完美展現身材曲線。客服態度也很好，會再回購！',
    product: '沙漏曲線蕾絲魚骨束腰馬甲背心',
    date: '2024-02-10'
  },
  {
    id: 2,
    name: 'Yuki',
    avatar: '/images/products/product-15.jpg',
    rating: 5,
    comment: '蕾絲細節處理得很精緻，穿上後氣質提升不少。尺寸很準，推薦給大家！',
    product: '玫瑰雕花蕾絲網紗連體背心',
    date: '2024-02-08'
  },
  {
    id: 3,
    name: 'Emma',
    avatar: '/images/products/product-18.jpg',
    rating: 5,
    comment: '收到實品比照片還要好看！材質很有質感，包裝也很精美。五星好評！',
    product: '法式高冷蕾絲拼接排釦背心',
    date: '2024-02-05'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 md:px-6 border-t border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-white font-light mb-4">
            顧客評價
          </h2>
          <p className="text-white/60 text-sm">
            來自真實顧客的使用心得
          </p>
        </div>

        <div className="relative">
          {/* Testimonials */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="glass-effect rounded-lg p-8 h-full flex flex-col justify-between">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>

                  {/* User Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {testimonial.name}
                        </div>
                        <div className="text-white/60 text-xs">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-white/40 text-xs max-w-[150px] text-right">
                      購買：{testimonial.product}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
