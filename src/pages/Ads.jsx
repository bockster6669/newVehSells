import React from "react";
import CarCard from "@/components/CarCard";
import Button from "@/components/Button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { getAllAds } from "@/ad";

export default function Ads() {
  const data = useLoaderData();
  return (
    <div>
      <div className=" bg-blue-100 box-border p-2 flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Button className="bg-black">Купе</Button>
          <Button className="bg-black">Година</Button>
          <Button className="bg-black">Двигател</Button>
          <Button className="bg-black">Състояние</Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
        {data.carList.map((car) => {
          return <CarCard key={car.id} ad={car} url="ads/VehView" />;
        })}
      </div>
      <Link to="create">
        <BsFillPlusCircleFill className="absolute bottom-10 right-10 text-[5rem] text-green-500" />
      </Link>
    </div>
  );
}

export async function loader({ params }) {
  const carList = await getAllAds();
  return { carList };
}
