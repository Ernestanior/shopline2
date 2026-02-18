'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Product3DCardProps {
  id: number
  name: string
  price: number
  image: string
  badge?: string
}

export default function Product3DCard({ id, name, price, image, badge }: Product3DCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <Link href={`/products/${id}`}>
      <div
        ref={cardRef}
        className="relative perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Card */}
          <div className="relative aspect-[2/3] bg-[#111111] overflow-hidden rounded-lg">
            {/* Badge */}
            {badge && (
              <div className="absolute top-3 left-3 bg-white text-black text-[10px] px-3 py-1.5 z-10 font-medium tracking-wide">
                {badge}
              </div>
            )}

            {/* Image */}
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-700"
              style={{
                transform: `scale(${isHovered ? 1.1 : 1})`
              }}
            />

            {/* Shine Effect */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
              style={{
                opacity: isHovered ? 0.3 : 0,
                background: `linear-gradient(${rotation.y + 90}deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`
              }}
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />

            {/* Info on Hover */}
            <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h3 className="text-white text-sm mb-2 line-clamp-2">
                {name}
              </h3>
              <p className="text-white text-lg font-medium">
                NT$ {price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Shadow */}
          <div
            className="absolute inset-0 -z-10 bg-black/20 blur-xl transition-all duration-300"
            style={{
              transform: `translateY(${isHovered ? '20px' : '10px'}) scale(${isHovered ? 0.95 : 0.9})`,
              opacity: isHovered ? 0.6 : 0.3
            }}
          />
        </div>
      </div>
    </Link>
  )
}
