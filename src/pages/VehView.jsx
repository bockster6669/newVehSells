import React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLoaderData } from "react-router-dom";
import { getImageUrl } from "@/utils/image-util";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function VehView() {
  const navigate = useNavigate();
  let ad = useLoaderData();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4000/myads/${ad.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.statusText}`);
      }

      navigate("/newVehSells/ads");
    } catch (error) {}
  };

  return (
    <div className="flex justify-center box-border p-5 ">
      <div className="max-w-[80%]">
        <div className="flex justify-between">
          <span className="text-[#808080]">{ad.date}</span>
          <span className="text-[#808080]">
            Views: <strong className="text-[#666666]">{ad.views}</strong>
          </span>
        </div>
        <div className="flex justify-end mt-2">
          <span className="font-bold border-[1px] border-solid rounded-lg box-border px-2 py-[1px] border-[#ff6600] text-lg">
            {ad.price} $
          </span>
        </div>
        <div></div>

        <h1 className="text-3xl font-bold">{ad.name}</h1>
        <p>{Object.values(ad.info).join(", ")}</p>
        <br />
        <div className="flex">
          <div className="w-1/2">
            <Separator className="border-[1px] border-black mb-2" />
            <p>{ad.text}</p>
            <Separator className="mb-4 border-[1px] border-black mt-2" />
            <div>
              <strong>Особености и Екстри</strong>
              <br />
              <p>{ad.extras}</p>
            </div>
            <Separator className="mb-4 border-[1px] border-black mt-2" />
            <p>
              <strong>Частно лице</strong>
              <br />
              {ad.sellerLocation}
            </p>
            <Separator className="mb-4 border-[1px] border-black mt-2" />
            <p>Контакт с продавача</p>
            <br />
            <div className="flex gap-4">
              <Button className="bg-[#8dbe35] rounded-sm p-4 text-xl gap-2">
                <BsTelephoneFill />
                089 434 2688
              </Button>
              <Button className="bg-[#fb923c] rounded-sm p-4 text-xl gap-2">
                <BsChatDotsFill />
                Start a chat
              </Button>
              {
                //TODO: create restrictions for Edit and Delete buttons
              }
              <Link
                to={`http://localhost:5173/newVehSells/Ads/create/${ad.id}`}
              >
                <Button className="bg-[#06b6d4] rounded-sm p-4 text-xl gap-2">
                  <BsChatDotsFill />
                  Edit
                </Button>
              </Link>
              <Button
                className="bg-[#dc2626] rounded-sm p-4 text-xl gap-2"
                onClick={handleDelete}
              >
                <BsChatDotsFill />
                Delete
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {ad.imgLinks.map((imgLink) => (
                  <CarouselItem key={imgLink.id}>
                    <img
                      src={getImageUrl(imgLink.img)}
                      className=" rounded-lg border-solid border-2 border-black"
                    ></img>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const id = params.adId;
  const ad = await fetch("http://localhost:4000/carList/" + id).then((resp) =>
    resp.json()
  );
  return ad;
}
