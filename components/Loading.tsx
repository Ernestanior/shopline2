export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* 外圈旋转 */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        
        {/* 内圈脉冲 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
        
        {/* 品牌名称 */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-white text-sm font-light tracking-wider">XYN</p>
        </div>
      </div>
    </div>
  )
}
