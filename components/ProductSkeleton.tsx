export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-[var(--color-bg-secondary)] rounded-md mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-[var(--color-bg-secondary)] rounded w-3/4" />
        <div className="h-4 bg-[var(--color-bg-secondary)] rounded w-1/2" />
      </div>
    </div>
  )
}
