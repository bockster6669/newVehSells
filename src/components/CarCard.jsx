import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { getImageUrl } from "@/utils/image-util";
import DataTable from "./DataTable";

const CardContent = ({ children, className }) => (
  <div className={`relative h-full ${className ? className : ""}`}>
    {children}
  </div>
);
const CardBody = ({ children, className }) => (
  <div
    className={`box-border p-4 w-[200px] max-h-[320px] bg-slate-300 rounded-md overflow-hidden shadow-lg border-[1px] border-solid border-green-100l ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);
const CardImg = ({ children, className }) => (
  <div
    className={`h-[100px] rounded-sm overflow-hidden bg-black ${
      className ? className : ""
    }`}
  >
    {children}
  </div>
);
const CardHeader = ({ children, className }) => (
  <header className={`${className ? className : ""}`}>{children}</header>
);

export default function CarCard({ ad }) {
  const readyImg = getImageUrl(ad.imgLinks[0].img)
  return (
    <CardBody>
      <Link to={`http://localhost:5173/newVehSells/Ads/VehView/${ad.id}`}>
        <CardContent>
          <CardImg>
            {readyImg ? (
              <img src={readyImg} className=" w-full h-full" />
            ) : (
              "Loading..."
            )}
          </CardImg>
          <CardHeader>
            <h2 className=" text-center text-lg my-2">
              <strong>{ad.name}</strong>
            </h2>
          </CardHeader>
          <div className="flex justify-end">
            <Button className="bg-green-500 border-[1px] border-solid border-green-100">
              {ad.price}$
            </Button>
          </div>
          <DataTable info={ad.info} className="max-h-[25%] overflow-hidden" />
          <footer className="mt-5">
            <p className=" text-xs text-gray-500">
              <strong>{ad.seller}</strong> from <strong>{ad.sellerLocation}</strong>
            </p>
          </footer>
        </CardContent>
      </Link>
    </CardBody>
  );
}
