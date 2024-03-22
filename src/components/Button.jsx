import React from "react";

export default function Button({ className, children, ...props }) {
  return (
    <button {...props}
      className={`py-1 px-3 text-white rounded-full border-white flex items-center justify-center
        ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}
