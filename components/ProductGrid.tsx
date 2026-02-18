import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: '【2色·前扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
    price: 590,
    image: '/images/products/product-1.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 2,
    name: 'Alice ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)',
    price: 580,
    image: '/images/products/product-2.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 3,
    name: 'Emma ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)',
    price: 580,
    image: '/images/products/product-3.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 4,
    name: '游籽 ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(黑)',
    price: 580,
    image: '/images/products/product-4.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 5,
    name: '茜 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·摩登街頭條紋西裝褲裙】',
    price: 580,
    image: '/images/products/product-5.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 6,
    name: 'Bonita ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附腰帶·極辣長腿御姊風修身包臀裙褲裙】',
    price: 580,
    image: '/images/products/product-6.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 7,
    name: 'Hailey ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(咖啡)',
    price: 580,
    image: '/images/products/product-7.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 8,
    name: '純 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附雙腰帶·美式學姊風修身包臀裙褲裙】',
    price: 580,
    image: '/images/products/product-8.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 9,
    name: 'TZU ➷ 背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心(白)',
    price: 580,
    image: '/images/products/product-9.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 10,
    name: '璇 ➷【背扣版·沙漏曲線蕾絲魚骨束腰馬甲背心】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】',
    price: 580,
    image: '/images/products/product-10.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 11,
    name: '【3色·背扣版】沙漏曲線蕾絲魚骨束腰馬甲背心',
    price: 580,
    image: '/images/products/product-11.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '束腰馬甲'
  },
  {
    id: 12,
    name: '丸 ➷ 【街頭酷辣公式俐落拉鍊寬鬆皮外套】/【玫瑰雕花蕾絲網紗連體背心bodysuit】/【美式辣妹側拉鍊開衩低腰褲裙】',
    price: 590,
    image: '/images/products/product-12.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 13,
    name: 'Rosa ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附帶鑽腰帶·酷辣卯釘低腰彈力包臀短褲】',
    price: 590,
    image: '/images/products/product-13.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 14,
    name: 'CC ➷【玫瑰雕花蕾絲網紗連體背心bodysuit】/【附明線腰帶·摩登街頭彈力工裝短褲】',
    price: 590,
    image: '/images/products/product-14.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
  {
    id: 15,
    name: '餘曦 ➷ 玫瑰雕花蕾絲網紗連體背心bodysuit',
    price: 590,
    image: '/images/products/product-15.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '連體背心'
  },
  {
    id: 16,
    name: '【1色】玫瑰雕花蕾絲網紗連體背心bodysuit',
    price: 590,
    image: '/images/products/product-16.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '連體背心'
  },
  {
    id: 17,
    name: 'Lucy ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(灰)',
    price: 590,
    image: '/images/products/product-17.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '背心'
  },
  {
    id: 18,
    name: 'Juliana ➷ 帶胸墊·法式高冷蕾絲拼接排釦背心bratop(黑)',
    price: 590,
    image: '/images/products/product-18.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '背心'
  },
  {
    id: 19,
    name: '寶嵐 ➷ 可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop(白)',
    price: 590,
    image: '/images/products/product-19.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '背心'
  },
  {
    id: 20,
    name: 'Jennie ➷【可拆卸胸墊·頂級蕾絲半月魚骨馬甲背心bratop】/【附雕刻腰帶·酷辣Y2K骷髏卯釘豐胯低腰短褲】',
    price: 590,
    image: '/images/products/product-20.jpg',
    badge: '2件9折、3件85折♥︎',
    category: '套裝'
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
