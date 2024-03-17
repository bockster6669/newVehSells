import React from 'react'

export default function Button(props) {
    return (
      <button className={`py-1 px-3 text-white ${props.color} rounded-full border-white flex items-center justify-center`}>
        {props.children}
      </button>
    );
  }
  