import React from "react";
import CarCard from "@/components/CarCard";
import { ads } from "@/assets/data.js";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="h-[90%] ">
      <div className="max-h-[10%] overflow-y-auto bg-blue-100 ">
        <div className="text-center">filters</div>
        <div className="flex gap-2">
          <Button color="bg-black">Купе</Button>
          <Button color="bg-black">Година</Button>
          <Button color="bg-black">Двигател</Button>
          <Button color="bg-black">Състояние</Button>
        </div>
      </div>
      <div className="w-fill h-[90%] flex flex-wrap box-border p-4 overflow-y-auto gap-4">
        {ads.map((car) => {
          return (
            <CarCard
              key={car.id}
              id={car.id}
              img={car.imgLinks[0]}
              name={car.name}
              price={car.price}
              info={car.info}
            />
          );
        })}
      </div>
    </div>
  );
}
