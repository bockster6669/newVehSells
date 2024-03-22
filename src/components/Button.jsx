import React from 'react'

export default function Button({className, children}) {
    return (
      <button className={
        `py-1 px-3 text-white bg-black rounded-full border-white flex items-center justify-center
        ${className ? className : ''}`
      }>
        {children}
      </button>
    );
  }
  