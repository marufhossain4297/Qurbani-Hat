'use client';
import AnimalSkeleton from "@/app/components/Home/AnimalSkeleton";

export default function Loading() {
    return (
        <div className="w-11/12 mx-auto mt-12">
            <div className="h-9 w-48 bg-gray-200 rounded-xl mb-6 animate-pulse" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6 mb-12">
                {[...Array(6)].map((_, index) => (
                    <AnimalSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}