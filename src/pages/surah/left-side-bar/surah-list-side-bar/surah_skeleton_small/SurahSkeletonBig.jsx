import { Skeleton, SkeletonLine } from 'keep-react'

export const SurahSkeletonSmall = () => {
    return (
        <Skeleton className="w-full h-8">
            <SkeletonLine className="w-full h-full bg-slate-300" />
        </Skeleton>
    )
}
