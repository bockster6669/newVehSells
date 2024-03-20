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
      <div>
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

        <div>{ad.name}</div>
        <div>{ad.price}</div>

        <main className=" max-h-[25%] overflow-hidden grid grid-cols-2  my-2 text-gray-500">
          {ad.info.map((infoItem, index) => (
            <React.Fragment key={Object.keys(infoItem)[0]}>
              <span className="col-start-1">{Object.keys(infoItem)[0]}:</span>
              <span className="col-start-2 truncate">
                {Object.values(infoItem)[0]}
              </span>
            </React.Fragment>
          ))}
        </main>
      </div>
    </div>
  );
}
