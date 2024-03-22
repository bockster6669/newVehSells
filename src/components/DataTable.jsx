import React from "react";

function DataTable({ info, className }) {
  return (
    <div
      className={`grid grid-cols-2 my-2 text-gray-500 
        ${className ? className : ""}`}
    >
      {Object.keys(info).map((key, index) => (
        <React.Fragment key={key}>
          <span className="col-start-1">{key}:</span>
          <span className="col-start-2 truncate">{info[key]}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DataTable;
