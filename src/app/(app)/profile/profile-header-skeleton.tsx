import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileHeaderSkeleton() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-8">
        <div className="relative h-24 w-24 rounded-full bg-secondary"></div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-1/2 rounded-lg bg-secondary" />
          <Skeleton className="h-4 w-24 rounded-lg bg-secondary" />
        </div>
      </div>
      <Skeleton className="h-6 w-full rounded-lg bg-secondary" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-24 h-6 rounded-lg bg-secondary" />
        <Skeleton className="w-24 h-6 rounded-lg bg-secondary" />
        <Skeleton className="w-24 h-6 rounded-lg bg-secondary" />
      </div>
    </section>
  )
}
