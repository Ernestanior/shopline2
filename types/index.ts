export interface User {
  id: number
  email: string
  name?: string
  isAdmin?: boolean
}

export interface Product {
  id: number
  name: string
  description?: string
  price: number
  image?: string
  category: string
  badge?: string
  stock: number
  featured: boolean
  status: string
  createdAt: Date
}

export interface CartItem {
  id: number
  userId: number
  productId: number
  quantity: number
  createdAt: Date
  product?: Product
}

export interface Order {
  id: number
  userId: number
  orderNumber: string
  totalAmount: number
  status: string
  paymentStatus: string
  shippingAddress?: any
  contactInfo?: any
  createdAt: Date
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  productName: string
  price: number
  quantity: number
}
