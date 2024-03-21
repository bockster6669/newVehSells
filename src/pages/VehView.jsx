import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getAd } from "../assets/data";
import { useLoaderData } from "react-router-dom";
import { getImageUrl } from "@/utils/image-util";

export function loader({ params }) {
  const ad = getAd(params.adId);
  return { ad };
}

export default function VehView() {
  let { ad } = useLoaderData();
  
  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {ad.imgLinks.map((imgLink) => (
            <CarouselItem key={imgLink}>
              <img src={getImageUrl(imgLink)}></img>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
