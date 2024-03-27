import React from "react";
import CarCard from "@/components/CarCard";
import Button from "@/components/Button";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { getAllAds } from "@/ad";
import { Button as SCNButton } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Ads() {
  const data = useLoaderData();
  return (
    <div>
      <div className=" bg-blue-100 box-border p-2 flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <SCNButton className=' bg-black text-white'>price</SCNButton>
            </DialogTrigger>
            <DialogContent className=' bg-blue-950 text-white'>
              <DialogHeader>
                <DialogTitle>budget</DialogTitle>
                <DialogDescription>
                  Choose a your budget to get the current ads.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Price
                  </Label>
                  <Input
                    id="price"
                  />
                </div>
                <SCNButton type="submit" size="sm" className="px-3 bg-green-400 text-white text-lg">
                  Submit
                </SCNButton>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <SCNButton type="button" className='bg-red-600 text-white text-lg'>
                    Close
                  </SCNButton>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
