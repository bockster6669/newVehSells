import React from "react";
import CarCard from "@/components/CarCard";
import { carsList } from "@/assets/cars.js";
import Button from "@/components/Button";
import { Route, Routes } from "react-router-dom";
import VehView from "./VehView";
export default function Main() {
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
        {carsList.map((car) => {
          return (
            <CarCard
              key={car.id}
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
