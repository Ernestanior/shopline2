'use client'

import { useState } from 'react'

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-white/60 hover:text-white underline"
      >
        尺寸指南
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl text-white font-medium">尺寸指南</h2>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white py-3 px-4">尺寸</th>
                    <th className="text-left text-white py-3 px-4">胸圍 (cm)</th>
                    <th className="text-left text-white py-3 px-4">腰圍 (cm)</th>
                    <th className="text-left text-white py-3 px-4">臀圍 (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white">S</td>
                    <td className="py-3 px-4 text-white/80">80-84</td>
                    <td className="py-3 px-4 text-white/80">60-64</td>
                    <td className="py-3 px-4 text-white/80">86-90</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white">M</td>
                    <td className="py-3 px-4 text-white/80">84-88</td>
                    <td className="py-3 px-4 text-white/80">64-68</td>
                    <td className="py-3 px-4 text-white/80">90-94</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 text-white">L</td>
                    <td className="py-3 px-4 text-white/80">88-92</td>
                    <td className="py-3 px-4 text-white/80">68-72</td>
                    <td className="py-3 px-4 text-white/80">94-98</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">XL</td>
                    <td className="py-3 px-4 text-white/80">92-96</td>
                    <td className="py-3 px-4 text-white/80">72-76</td>
                    <td className="py-3 px-4 text-white/80">98-102</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-lg text-sm">
              <h3 className="font-medium text-white mb-2">測量方法</h3>
              <ul className="space-y-1 text-white/70">
                <li>• 胸圍：沿胸部最豐滿處水平測量一周</li>
                <li>• 腰圍：沿腰部最細處水平測量一周</li>
                <li>• 臀圍：沿臀部最豐滿處水平測量一周</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
