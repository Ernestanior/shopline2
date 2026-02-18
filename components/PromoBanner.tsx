'use client'

import Link from 'next/link'
import Image from 'next/image'

interface PromoBannerProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageUrl: string
  theme?: 'light' | 'dark'
}

export default function PromoBanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl,
  theme = 'dark'
}: PromoBannerProps) {
  const isDark = theme === 'dark'

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-r from-black/80 via-black/50 to-transparent'
          : 'bg-gradient-to-r from-white/80 via-white/50 to-transparent'
      }`} />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="max-w-xl">
            <h2 className={`text-3xl md:text-5xl font-light mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {title}
            </h2>
            <p className={`text-base md:text-lg mb-8 ${
              isDark ? 'text-white/80' : 'text-black/80'
            }`}>
              {subtitle}
            </p>
            <Link
              href={ctaLink}
              className={`inline-block px-8 py-3 text-sm font-medium transition-all hover:scale-105 ${
                isDark
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  )
}
