import React from "react";
import TextAndValue from "../../CommanComponents/TextAndValue";
import { MdArrowOutward } from "react-icons/md";
import Button from "../../CommanComponents/button";
import { IoAddCircleSharp, IoRemoveCircleSharp } from "react-icons/io5";
import graph from "../../images/Graph.png";
const CurrentPrice = () => {
  return (
    <div className="CurrentPrice w-screen sm:w-full lg:w-1/2 bg-white p-3 rounded-sm shadow-md">
      <div className="main">
        <div className=" flex flex-col sm:flex-row items-end justify-between ">
          <div className="text flex items-start  w-full sm:w-1/2">
            <TextAndValue
              text={"Current Price"}
              value={"₹26,670.25"}
              label={""}
            />
            <div className="label flex justify-center items-center text-green-500">
              <MdArrowOutward className="" />
              <div className="value">0.04%</div>
            </div>
          </div>
          <div className="btns flex space-x-3 text-white text-md h-10  w-full sm:w-1/2  lg:justify-end">
            <Button
              icon={<IoAddCircleSharp fontSize={"20px"} />}
              text={"Buy"}
            />
            <Button
              icon={<IoRemoveCircleSharp fontSize={"20px"} />}
              text={"Sell"}
            />
          </div>
        </div>
        <div className="tabs mt-2 flex justify-end w-full sm:w-1/2 ">
          <ul className="flex p-1 bg- w-2/6 justify-center rounded-lg ">
            <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">1H</li>
            <li className="item cursor-pointer rounded-md text-sm pr-2 pl-2   m-auto bg-gray-200 shadow-sm">
              1D
            </li>
            <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">1M</li>
            <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">1W</li>
          </ul>
        </div>
        <div className="image mt-2">
          <img className="h-full w-full" src={graph} alt="" />
          <div className="times mt-3 w-full ">
            <ul className="flex p-1 bg-white  justify-center ">
              <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">7:15 AM</li>
              <li className="item cursor-pointer rounded-lg text-sm pr-2 pl-2   m-auto bg-white">
                10:30 AM
              </li>
              <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">12:30 PM</li>
              <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">3:15 PM</li>
              <li className="item cursor-pointer  text-sm pr-2 pl-2 rounded-lg  m-auto">9:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
