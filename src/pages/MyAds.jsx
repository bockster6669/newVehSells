import React, { Suspense } from "react";
import CarCard from "@/components/CarCard";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getMyAds } from "@/ad";
function MyAds() {
  const carList = useLoaderData();

  return (
    <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={carList.myAds} errorElement="Error has acuured">
          {(myAds) =>
            myAds.map((car) => {
              return <CarCard key={car.id} ad={car} url={`myads/VehView`} />;
            })
          }
        </Await>
      </Suspense>
    </div>
  );
}

export default MyAds;

export async function loader() {
  return defer({ myAds: getMyAds() });
}
