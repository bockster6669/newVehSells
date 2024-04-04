import React, { Suspense } from "react";
import CarCard from "@/components/CarCard";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getMyAds } from "@/ad";
import { useQuery } from "@tanstack/react-query";

function MyAds() {
  // const data = useLoaderData();
  const { data, isLoading } = useQuery({
    queryKey: ["myads"],
    queryFn: () => getMyAds()
  });

  if (isLoading) return <div>Loading data...</div>;

  return (
    <div className="flex flex-wrap items-center justify-center box-border overflow-auto p-4 gap-4">
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={data.myAds} errorElement="Error has acuured">
          {(myAds) =>
            myAds.map((car) => {
              return <CarCard key={car.id} ad={car} url={`myads/VehView`} />;
            })
          }
        </Await>
      </Suspense> */}
      {data.map((myAd) => (
        <CarCard key={myAd.id} ad={myAd} url={`myads/VehView`} />
      ))}
    </div>
  );
}

export default MyAds;

export async function loader() {
  return defer({ myAds: getMyAds() });
}
