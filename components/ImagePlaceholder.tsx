interface ImagePlaceholderProps {
  aspectRatio?: '2/3' | '1/1' | '16/9'
  className?: string
}

export default function ImagePlaceholder({ 
  aspectRatio = '2/3',
  className = '' 
}: ImagePlaceholderProps) {
  const aspectClasses = {
    '2/3': 'aspect-[2/3]',
    '1/1': 'aspect-square',
    '16/9': 'aspect-video'
  }

  return (
    <div className={`${aspectClasses[aspectRatio]} bg-[#f5f5f5] flex items-center justify-center ${className}`}>
      <div className="text-center">
        <svg className="w-12 h-12 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-xs text-gray-400">添加图片</p>
      </div>
    </div>
  )
}
