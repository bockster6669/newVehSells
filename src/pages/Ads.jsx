import React from "react";
import CarCard from "@/components/CarCard";
import Button from "@/components/Button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, redirect, useActionData, useLoaderData } from "react-router-dom";
export default function Ads() {
  // const data = useActionData();
  // if (data) {
  //   console.log(data);
  // }
  const data = useLoaderData();
  return (
    <div>
      <div className=" bg-blue-100 sticky top-0 z-10 box-border p-2 flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Button className="bg-black">Купе</Button>
          <Button className="bg-black">Година</Button>
          <Button className="bg-black">Двигател</Button>
          <Button className="bg-black">Състояние</Button>
        </div>
      </div>
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
      <Link to="create">
        <BsFillPlusCircleFill className="absolute bottom-10 right-10 text-[5rem] text-green-500" />
      </Link>
    </div>
  );
}

export async function loader({ params }) {
  const carList = await fetch('http://localhost:4000/carList').then((resp)=>resp.json())
  return {carList};
}

export async function action({ request }) {
  const formData = await request.formData();
  const newAd = Object.fromEntries(formData)

  fetch("http://localhost:4000/carList", {
    method: "POST",
    body: JSON.stringify(
      {
        "id": 4,
        "name": newAd.name,
        "price": newAd.price,
        "info": { "Type": newAd.type, "Year": newAd.year},
        "imgLinks": ["airtug.png"],
        "date": newAd.date,
        "views": newAd.views,
        "text": newAd.text,
        "sellerLocation": newAd.sellerLocation,
        "extras": newAd.extras
      }
    )
  });
  //send to backend
  // return ad;
  return redirect("/newVehSells/ads/vehView/1");
}
