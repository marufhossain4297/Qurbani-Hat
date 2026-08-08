import { Card, Skeleton } from "@heroui/react";

export default function AnimalSkeleton() {
    return (
        <Card className="w-full p-4 space-y-5 rounded-3xl" radius="lg">
            {/* Image Skeleton */}
            <Skeleton className="rounded-2xl">
                <div className="h-48 rounded-2xl bg-default-300"></div>
            </Skeleton>

            <div className="space-y-3">
                {/* Title Skeleton */}
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>

                {/* Subtitle / Details Skeleton */}
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>

                {/* Price / Footer Skeleton */}
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    );
}