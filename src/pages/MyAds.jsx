import React from "react";
import CarCard from "@/components/CarCard";
import { useLoaderData } from "react-router-dom";
import { getMyAds } from "@/ad";
function MyAds() {
  const carList = useLoaderData();

  return (
    <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
      {carList.map((car) => {
        return <CarCard key={car.id} ad={car} url={`myads/VehView`} />;
      })}
    </div>
  );
}

export default MyAds;

export async function loader() {
  const carList = await getMyAds();
  return carList;
}
