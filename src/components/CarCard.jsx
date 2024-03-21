import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { getImageUrl } from "@/utils/image-util";

export default function CarCard({ id, img, name, price, info }) {
  return (
    <div className=" box-border p-4 w-[200px] max-h-[320px] bg-slate-300 rounded-md overflow-hidden shadow-lg border-[1px] border-solid border-green-100">
      <Link to={`VehView/${id}`}>
        <div className="relative h-full">
          <div className=" w-full h-[100px] rounded-sm overflow-hidden bg-black">
            {img ? (
              <img src={getImageUrl(img)} className=" w-full h-full" />
            ) : (
              "Loading..."
            )}
          </div>
          <header>
            <h2 className=" text-center text-lg my-2">
              <strong>{name}</strong>
            </h2>
          </header>
          <div className="flex justify-end">
            <Button color="bg-green-500">{price}$</Button>
          </div>
          <main className=" max-h-[25%] overflow-hidden grid grid-cols-2  my-2 text-gray-500">
            {info.map((infoItem, index) => (
              <React.Fragment key={Object.keys(infoItem)[0]}>
                <span className="col-start-1">{Object.keys(infoItem)[0]}:</span>
                <span className="col-start-2 truncate">
                  {Object.values(infoItem)[0]}
                </span>
              </React.Fragment>
            ))}
          </main>
          <footer className="mt-5">
            <p className=" text-xs text-gray-500">
              <strong>Boris Foster</strong> from <strong>One Shot</strong>
            </p>
          </footer>
        </div>
      </Link>
    </div>
  );
}
