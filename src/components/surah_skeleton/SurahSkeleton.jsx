import { Skeleton, SkeletonLine } from 'keep-react'

export const SurahSkeleton = () => {
    return (
        <Skeleton className="w-48 h-12">
            <SkeletonLine className="w-full h-full bg-slate-300" />
        </Skeleton>
    )
}
