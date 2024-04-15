import React from "react";
import Card from "./Card";

const TabCard = ({ rows }) => {
  return <div className="sm:hidden  pl-4 pr-4 flex flex-col space-y-3  ">{
    rows.map((row)=>{
        return <Card key={row.id} row={row}/>
    })
  }</div>;
};

export default TabCard;
