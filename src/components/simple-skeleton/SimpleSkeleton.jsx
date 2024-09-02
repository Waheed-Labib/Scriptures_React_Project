import { Skeleton, SkeletonLine } from "keep-react";

export const SimpleSkeleton = () => {
    return (
        <Skeleton className="w-full h-12">
            <SkeletonLine className="w-full h-full bg-slate-200" />
        </Skeleton>
    )
}

export default SimpleSkeleton;