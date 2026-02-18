import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="bg-black text-white text-center py-2 text-xs md:text-sm">
        2件9折、3件85折♥︎
      </div>

      <section className="px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-normal mb-8">配送資訊</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-4">配送方式</h2>
              <div className="space-y-4">
                <div className="p-4 border border-[var(--color-border)]">
                  <h3 className="font-medium mb-2">宅配到府</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    配送時間：3-5 個工作天<br />
                    運費：NT$ 100（滿 NT$ 1,000 免運）
                  </p>
                </div>
                <div className="p-4 border border-[var(--color-border)]">
                  <h3 className="font-medium mb-2">超商取貨</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    配送時間：3-5 個工作天<br />
                    運費：NT$ 60（滿 NT$ 800 免運）
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">配送範圍</h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                目前配送範圍僅限台灣本島及離島地區。
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>• 台灣本島：3-5 個工作天</li>
                <li>• 離島地區：5-7 個工作天</li>
                <li>• 偏遠地區可能需要額外 1-2 個工作天</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">配送注意事項</h2>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>• 訂單成立後將於 1-2 個工作天內出貨</li>
                <li>• 出貨後會以簡訊或 Email 通知您</li>
                <li>• 配送前一天會再次通知您</li>
                <li>• 如遇天災或不可抗力因素，配送時間可能延遲</li>
                <li>• 超商取貨請於 7 天內取件，逾期將退回</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">運費說明</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left py-3 px-4">配送方式</th>
                      <th className="text-left py-3 px-4">運費</th>
                      <th className="text-left py-3 px-4">免運門檻</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--color-border)]">
                      <td className="py-3 px-4">宅配到府</td>
                      <td className="py-3 px-4">NT$ 100</td>
                      <td className="py-3 px-4">NT$ 1,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">超商取貨</td>
                      <td className="py-3 px-4">NT$ 60</td>
                      <td className="py-3 px-4">NT$ 800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
