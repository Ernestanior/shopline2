'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ParallaxSectionProps {
  imageUrl: string
  speed?: number
  children?: React.ReactNode
}

export default function ParallaxSection({ 
  imageUrl, 
  speed = 0.5,
  children
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const sectionTop = rect.top + scrolled
        const offset = (scrolled - sectionTop) * speed
        setOffsetY(offset)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div 
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Image
          src={imageUrl}
          alt="Parallax background"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        {children}
      </div>
    </div>
  )
}
