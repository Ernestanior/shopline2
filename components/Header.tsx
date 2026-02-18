'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const productCategories = [
  {
    name: '束腰馬甲',
    items: ['前扣版', '背扣版', '魚骨款'],
    image: '/images/products/product-1.jpg'
  },
  {
    name: '連體背心',
    items: ['蕾絲款', '網紗款', '雕花款'],
    image: '/images/products/product-15.jpg'
  },
  {
    name: '背心上衣',
    items: ['排釦款', '法式款', '高冷款'],
    image: '/images/products/product-18.jpg'
  },
  {
    name: '套裝組合',
    items: ['西裝套裝', '短褲套裝', '裙裝套裝'],
    image: '/images/products/product-5.jpg'
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  useEffect(() => {
    // 监听滚动
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // 从 localStorage 获取购物车数量
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart')
      if (cart) {
        const items = JSON.parse(cart)
        const count = items.reduce((sum: number, item: any) => sum + item.quantity, 0)
        setCartCount(count)
      }
    }
    
    updateCartCount()
    
    // 监听 storage 事件
    window.addEventListener('storage', updateCartCount)
    return () => window.removeEventListener('storage', updateCartCount)
  }, [])

  return (
    <header className={`sticky top-0 bg-black z-50 border-b border-[var(--color-border)] transition-all ${
      scrolled ? 'shadow-lg backdrop-blur-sm bg-black/95' : ''
    }`}>
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-wide text-white hover:opacity-80 transition-opacity">
            XYN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <Link href="/products" className="text-sm text-white hover:opacity-60 transition-opacity">
                商品
              </Link>
              
              {/* Mega Menu */}
              {showMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-4xl animate-fadeIn">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-8 shadow-2xl">
                    <div className="grid grid-cols-4 gap-6">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={`/products?category=${encodeURIComponent(category.name)}`}
                          className="group"
                        >
                          <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded">
                            <Image
                              src={category.image}
                              alt={category.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                          </div>
                          <h3 className="text-white text-sm font-medium mb-2 group-hover:text-white/80 transition-colors">
                            {category.name}
                          </h3>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item} className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                      <Link
                        href="/products"
                        className="text-sm text-white hover:opacity-60 transition-opacity"
                      >
                        查看全部商品 →
                      </Link>
                      <div className="flex gap-4 text-xs text-white/60">
                        <span>2件9折</span>
                        <span>3件85折</span>
                        <span>全台免運</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-sm text-white hover:opacity-60 transition-opacity">
              關於
            </Link>
            <Link href="/contact" className="text-sm text-white hover:opacity-60 transition-opacity">
              聯絡
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="/search" className="text-white hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/login" className="text-white hover:opacity-60 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/cart" className="text-white hover:opacity-60 transition-opacity relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium animate-pulse">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-white hover:opacity-60 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)] animate-fadeIn">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/products" 
                className="text-sm text-white hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                商品
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-white hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                關於
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-white hover:opacity-60 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                聯絡
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
