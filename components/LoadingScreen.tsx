'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl text-white font-light tracking-[0.3em] animate-pulse">
          XYN
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-0.5 bg-white/10 overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-4 text-white/60 text-sm">
        {progress < 100 ? '載入中...' : '完成'}
      </div>
    </div>
  )
}
