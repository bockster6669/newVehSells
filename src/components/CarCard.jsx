import React from "react";
import TurismoIMG from "../assets/turismo-omaggio.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function CarCard({ name, price, info }) {
  return (
    // style={{borderStyle:"ridge", borderWidth:"3px"}}
    <div className=" box-border p-4 w-[200px] max-h-[320px] bg-slate-300 rounded-md overflow-hidden">
      <Link to={`/VehView`}>
        <div className="relative h-full">
          <div className=" w-full h-[100px] rounded-sm overflow-hidden bg-black">
            <img src={TurismoIMG} className=" w-full h-full" />
          </div>
          <header>
            <h2 className=" text-center text-lg my-2">
              <strong>{name}</strong>
            </h2>
          </header>
          <div className="flex justify-end">
            <Button color="bg-green-500">
              {price}$
            </Button>
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
          <footer className="absolute bottom-2 mt-5">
            <p className=" text-xs text-gray-500">
              <strong>Boris Foster</strong> from <strong>One Shot</strong>
            </p>
          </footer>
        </div>
      </Link>
    </div>
  );
}
