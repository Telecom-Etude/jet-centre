import React from 'react';

import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

function BadgeSkeleton({ className }: { className: string }) {
    return <Skeleton className={cn('h-[calc(2*0.125rem+1rem+2*2px)] rounded-full', className)} />;
}

export { Skeleton, BadgeSkeleton };
