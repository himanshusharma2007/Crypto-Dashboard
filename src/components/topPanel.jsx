import React, { useState } from "react";
import { PiUserCircleThin } from "react-icons/pi";

const TopPanel = ({ showAction, toggleAction, title }) => {
  return (
    <>
      <div className="top-panel flex justify-between pl-16 pr-3 sm:pl-16 sm:pr-16 items-center h-[8vh]  w-screen text-3xl  lg:w-[80vw] bg-white ">
        <div className="text dark-gray font-semibold">{title}</div>
        <div onClick={()=>toggleAction(1)} className="text-2xl">
          <PiUserCircleThin fontSize="44px" className="user-icon" />
        </div>
      </div>
      {showAction && (
        <div className="actions absolute top-16 right-0 lg:right-14  w-[200px] shadow-md  bg-white z-10 ">
          <ul className="flex flex-col space-y-2 w-full  ">
            <li className="action z-50">About</li>
            <li className="action z-50">Contact</li>
            <li className="action z-50">Follow us</li>
            <li className="action z-50">Login</li>
            <li className="action z-50">Services</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default TopPanel;
