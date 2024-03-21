import React from "react";
import CarCard from "@/components/CarCard";
import { ads } from "@/assets/data.js";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      {/* <div className=" bg-blue-100 ">
        <div className="text-center">filters</div>
        <div className="flex gap-2">
          <Button color="bg-black">Купе</Button>
          <Button color="bg-black">Година</Button>
          <Button color="bg-black">Двигател</Button>
          <Button color="bg-black">Състояние</Button>
        </div>
      </div> */}
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
