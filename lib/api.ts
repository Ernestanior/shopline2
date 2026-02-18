const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8787'

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.error || 'API request failed')
    }

    return data
  } catch (error) {
    // 如果API不可用，返回模拟数据或抛出友好错误
    console.error('API Error:', error)
    throw new Error('服务暂时不可用，请稍后再试')
  }
}

export const api = {
  // Auth
  login: (email: string, password: string) =>
    fetchAPI('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (email: string, password: string, name?: string) =>
    fetchAPI('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    }),

  logout: () =>
    fetchAPI('/api/auth/logout', {
      method: 'POST',
    }),

  me: () => fetchAPI('/api/auth/me'),

  // Products
  getProducts: () => fetchAPI('/api/products'),

  getProduct: (id: number) => fetchAPI(`/api/products/${id}`),

  // Cart
  getCart: () => fetchAPI('/api/cart'),

  addToCart: (productId: number, quantity: number = 1) =>
    fetchAPI('/api/cart/items', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    }),

  updateCartItem: (id: number, quantity: number) =>
    fetchAPI(`/api/cart/items/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    }),

  removeFromCart: (id: number) =>
    fetchAPI(`/api/cart/items/${id}`, {
      method: 'DELETE',
    }),

  clearCart: () =>
    fetchAPI('/api/cart', {
      method: 'DELETE',
    }),

  // Orders
  getOrders: () => fetchAPI('/api/orders'),

  getOrder: (id: number) => fetchAPI(`/api/orders/${id}`),

  createOrder: (data: any) =>
    fetchAPI('/api/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Admin
  admin: {
    getProducts: () => fetchAPI('/api/admin/products'),

    createProduct: (data: any) =>
      fetchAPI('/api/admin/products', {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    updateProduct: (id: number, data: any) =>
      fetchAPI(`/api/admin/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),

    deleteProduct: (id: number) =>
      fetchAPI(`/api/admin/products/${id}`, {
        method: 'DELETE',
      }),

    getOrders: () => fetchAPI('/api/admin/orders'),

    updateOrderStatus: (id: number, status: string) =>
      fetchAPI(`/api/admin/orders/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      }),
  },

  // Wishlist
  getWishlist: () => fetchAPI('/api/wishlist'),

  addToWishlist: (productId: number) =>
    fetchAPI('/api/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    }),

  removeFromWishlist: (productId: number) =>
    fetchAPI(`/api/wishlist/${productId}`, {
      method: 'DELETE',
    }),

  // Reviews
  getProductReviews: (productId: number) =>
    fetchAPI(`/api/reviews/product/${productId}`),

  createReview: (productId: number, rating: number, content?: string) =>
    fetchAPI('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({ productId, rating, content }),
    }),
}
