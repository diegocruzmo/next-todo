import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-4 p-4 gap-4 w-full">
      <div className="flex flex-col gap-4 items-center justify-between rounded-md border p-4 shadow-sm w-full">
        <Skeleton className="h-[20px] w-[220px] rounded-md" />
        <Skeleton className="h-[40px] w-[220px] rounded-md" />
        <Skeleton className="h-[60px] w-[220px] rounded-md" />
      </div>

      <div className="flex flex-col gap-4 items-center justify-between rounded-md border p-4 shadow-sm w-full">
        <Skeleton className="h-[20px] w-[220px] rounded-md" />
        <Skeleton className="h-[40px] w-[220px] rounded-md" />
        <Skeleton className="h-[60px] w-[220px] rounded-md" />
      </div>

      <div className="flex flex-col gap-4 items-center justify-between rounded-md border p-4 shadow-sm w-full">
        <Skeleton className="h-[20px] w-[220px] rounded-md" />
        <Skeleton className="h-[40px] w-[220px] rounded-md" />
        <Skeleton className="h-[60px] w-[220px] rounded-md" />
      </div>
    </div>
  );
}
