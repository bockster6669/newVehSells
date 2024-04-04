import React from "react";
import CarCard from "@/components/CarCard";
import { getMyAds } from "@/ad";
import { useQuery } from "@tanstack/react-query";
import SkeletonCard from "@/components/SkeletonCard";
export default function MyAds() {
  const { data, isLoading } = useQuery({
    queryKey: ["myads"],
    queryFn: () => getMyAds(),
  });

  return (
    <div className="flex flex-wrap items-center justify-center box-border overflow-auto p-4 gap-4">
      {isLoading ? (
        <SkeletonCard />
      ) : (
        data.map((myAd) => (
          <CarCard key={myAd.id} ad={myAd} url={`myads/VehView`} />
        ))
      )}
    </div>
  );
}
