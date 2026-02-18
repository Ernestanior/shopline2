import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="bg-black text-white text-center py-2 text-xs md:text-sm">
        2件9折、3件85折♥︎
      </div>

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-normal mb-8">退換貨政策</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-4">退換貨條件</h2>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>• 商品到貨 7 天內可申請退換貨</li>
                <li>• 商品需保持全新未使用狀態</li>
                <li>• 商品包裝、配件、贈品需完整</li>
                <li>• 不接受已拆封、使用過的商品退換</li>
                <li>• 特價商品、促銷商品恕不接受退換貨</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">退換貨流程</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">聯繫客服</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      請透過客服信箱或電話聯繫我們，提供訂單編號和退換貨原因
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">寄回商品</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      收到退貨地址後，請將商品完整包裝並寄回
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">審核商品</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      收到商品後 3-5 個工作天內完成審核
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">完成退款</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      審核通過後 7-14 個工作天內完成退款
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">退款方式</h2>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>• 信用卡付款：退款至原信用卡帳戶</li>
                <li>• ATM 轉帳：退款至指定銀行帳戶</li>
                <li>• 超商付款：退款至指定銀行帳戶</li>
                <li>• 退款時間：7-14 個工作天</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">運費說明</h2>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>• 非商品瑕疵退貨，運費由買家負擔</li>
                <li>• 商品瑕疵或錯誤，運費由賣家負擔</li>
                <li>• 換貨運費由賣家負擔</li>
              </ul>
            </div>

            <div className="p-6 bg-[#f5f5f5]">
              <h3 className="font-medium mb-2">需要協助？</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                如有任何退換貨問題，歡迎聯繫我們的客服團隊
              </p>
              <div className="space-y-2 text-sm">
                <p>客服信箱：support@molava.tw</p>
                <p>客服時間：週一至週五 10:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
