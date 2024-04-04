import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-[200px] h-[300px]">
      <Skeleton className="h-[100px] rounded-xl bg-gray-300" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px] bg-gray-300 " />
        <Skeleton className="h-4 w-[200px] bg-gray-300" />
      </div>
    </div>
  )
}


export default SkeletonCard