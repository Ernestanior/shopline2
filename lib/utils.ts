export function formatPrice(price: number): string {
  return `NT$ ${price.toLocaleString()}`
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export function calculateDiscount(quantity: number, price: number): number {
  if (quantity >= 3) {
    return price * 0.85 // 85折
  } else if (quantity >= 2) {
    return price * 0.9 // 9折
  }
  return price
}

export function getDiscountText(quantity: number): string {
  if (quantity >= 3) return '已享85折優惠'
  if (quantity >= 2) return '已享9折優惠'
  return '2件9折、3件85折'
}
