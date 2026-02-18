'use client'

import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

interface User {
  id: number
  email: string
  name?: string
  isAdmin?: boolean
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const data = await api.me()
      setUser(data.user)
    } catch (error) {
      // API不可用时，检查localStorage中的用户信息
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser))
        } catch {
          setUser(null)
        }
      } else {
        setUser(null)
      }
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const data = await api.login(email, password)
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data
    } catch (error) {
      // 模拟登录（仅用于演示）
      const mockUser = { id: 1, email, name: email.split('@')[0] }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      return { user: mockUser }
    }
  }

  const register = async (email: string, password: string, name?: string) => {
    try {
      const data = await api.register(email, password, name)
      setUser(data.user)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data
    } catch (error) {
      // 模拟注册（仅用于演示）
      const mockUser = { id: 1, email, name: name || email.split('@')[0] }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      return { user: mockUser }
    }
  }

  const logout = async () => {
    try {
      await api.logout()
    } catch {
      // 忽略API错误
    }
    setUser(null)
    localStorage.removeItem('user')
  }

  return {
    user,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    login,
    register,
    logout,
  }
}
