import React from "react";
import CarCard from "@/components/CarCard";
import { useLoaderData } from "react-router-dom";
function MyAds() {
  const data = useLoaderData();

  return (
    <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
      {data.carList.map((car) => {
        return (
          <CarCard
            key={car.id}
            id={car.id}
            img={car.imgLinks[0].img}
            name={car.name}
            price={car.price}
            info={car.info}
          />
        );
      })}
    </div>
  );
}

export default MyAds;

export async function loader({ params }) {
  const carList = await fetch("http://localhost:4000/myads").then((resp) =>
    resp.json()
  );
  return { carList };
}
