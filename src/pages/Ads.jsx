import React from "react";
import CarCard from "@/components/CarCard";
import { ads } from "@/assets/data.js";
import Button from "@/components/Button";
export default function Home() {
  return (
    <div>
      <div className=" bg-blue-100 sticky top-0 z-10 box-border p-2 flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Button color="bg-slay">Купе</Button>
          <Button color="bg-slay">Година</Button>
          <Button color="bg-slay">Двигател</Button>
          <Button color="bg-slay">Състояние</Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
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
