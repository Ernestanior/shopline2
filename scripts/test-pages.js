/**
 * 自动化页面测试脚本
 * 用于检测常见的页面问题
 */

const pages = [
  { path: '/', name: '首页' },
  { path: '/products', name: '产品列表' },
  { path: '/products/1', name: '产品详情' },
  { path: '/cart', name: '购物车' },
  { path: '/checkout', name: '结账' },
  { path: '/login', name: '登录' },
  { path: '/register', name: '注册' },
  { path: '/orders', name: '订单列表' },
  { path: '/orders/1', name: '订单详情' },
  { path: '/profile', name: '个人资料' },
  { path: '/wishlist', name: '收藏' },
]

async function testPage(url) {
  try {
    const response = await fetch(url)
    return {
      status: response.status,
      ok: response.ok,
      statusText: response.statusText
    }
  } catch (error) {
    return {
      status: 0,
      ok: false,
      error: error.message
    }
  }
}

async function runTests() {
  const baseUrl = 'http://localhost:3001'
  console.log('开始测试所有页面...\n')
  
  const results = []
  
  for (const page of pages) {
    const url = `${baseUrl}${page.path}`
    console.log(`测试: ${page.name} (${url})`)
    
    const result = await testPage(url)
    results.push({
      ...page,
      ...result
    })
    
    if (result.ok) {
      console.log(`✅ ${page.name} - 正常 (${result.status})`)
    } else {
      console.log(`❌ ${page.name} - 失败 (${result.status} ${result.statusText || result.error})`)
    }
    console.log('')
  }
  
  console.log('\n测试总结:')
  const passed = results.filter(r => r.ok).length
  const failed = results.filter(r => !r.ok).length
  console.log(`通过: ${passed}/${results.length}`)
  console.log(`失败: ${failed}/${results.length}`)
  
  if (failed > 0) {
    console.log('\n失败的页面:')
    results.filter(r => !r.ok).forEach(r => {
      console.log(`- ${r.name} (${r.path}): ${r.status} ${r.statusText || r.error}`)
    })
  }
}

runTests().catch(console.error)
