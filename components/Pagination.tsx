interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-[var(--color-border)] hover:border-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        上一頁
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border transition-colors ${
            currentPage === page
              ? 'border-black bg-black text-white'
              : 'border-[var(--color-border)] hover:border-black'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-[var(--color-border)] hover:border-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        下一頁
      </button>
    </div>
  )
}
