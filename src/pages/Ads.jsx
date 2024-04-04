import React from "react";
import CarCard from "@/components/CarCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link, Form } from "react-router-dom";
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
import { useQuery } from "@tanstack/react-query";
import { getAdsByPrice } from "@/ad";
export default function Ads() {
  const { data, isLoading } = useQuery({
    queryKey: ["ads"],
    queryFn: () => getAdsByPrice(),
  });

  if (isLoading) return <div>Loading data...</div>;

  return (
    <div>
      <div className=" bg-blue-100 box-border p-2 flex flex-wrap items-center justify-center">
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <SCNButton className=" bg-gray-700 text-white ">price</SCNButton>
            </DialogTrigger>
            <DialogContent className="bg-[#f5f5f5] ">
              <DialogHeader>
                <DialogTitle>budget</DialogTitle>
                <DialogDescription>
                  Choose a your budget to get the current ads.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Form>
                    <input
                      placeholder="priceOf"
                      name="priceOf"
                      className=" "
                      defaultValue={0}
                    ></input>
                    <input
                      placeholder="priceOn"
                      name="priceOn"
                      className=""
                      defaultValue={99999999}
                    ></input>
                    <button
                      type="submit"
                      className=" rounded-sm box-border bg-green-600 text-white p-4"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <SCNButton
                    type="button"
                    className="bg-red-600 text-white text-lg"
                  >
                    Close
                  </SCNButton>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center box-border overflow-auto  p-4 gap-4">
        {data.map((car) => {
          return <CarCard key={car.id} ad={car} url="ads/VehView" />;
        })}
      </div>
      <Link to="create">
        <BsFillPlusCircleFill className="absolute bottom-10 right-10 text-[5rem] text-green-500" />
      </Link>
    </div>
  );
}