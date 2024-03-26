import React from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className=" sticky top-0 z-10 bg-orange-500 flex items-center text-2xl text-white box-border p-4 font-roboto font-bold">
      <span>Cars.bg</span>
      <Button
        className="  ml-10 flex items-center gap-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BsArrowBarLeft />
        back
      </Button>
      <Button
        className="  ml-10 flex items-center gap-2"
        onClick={() => {
          navigate(1);
        }}
      >
        <BsArrowBarRight />
        forward
      </Button>
    </header>
  );
}
