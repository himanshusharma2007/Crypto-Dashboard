import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
// import { AiFillDollarCircle} from "react-icons/ai";

const RecentTransations = () => {
  const transations = [
    {
      icon: <AiFillDollarCircle fontSize={"20px"} />,
      title: "INR DEPOSITE",
      date: "22/11/24",
      time: "7:30 PM",
      profitloss: "+ ₹81,123.10",
      detail: "+ $51,123.10",
    },
    {
      icon: <AiFillDollarCircle fontSize={"20px"} />,
      title: "INR DEPOSITE",
      date: "22/11/24",
      time: "9:30 PM",
      profitloss: "+ ₹81,123.10",
      detail: "+ $51,123.10",
    },
    {
      icon: <AiFillDollarCircle fontSize={"20px"} />,
      title: "INR DEPOSITE",
      date: "22/11/24",
      time: "10:30 PM",
      profitloss: "+ ₹81,123.10",
      detail: "+ $51,123.10",
    },
  ];
  return (
    <div className="RecentTransations bg-white rounded-sm p-3  shadow-md w-full sm:w-full lg:w-1/2">
      <div className="main flex flex-col  relative h-full  justify-between">
        <div className="transactions space-y-1">
          <div className="heading text-lightGray text-lg">
            Recent transations
          </div>

          {transations.map((transation) => {
            return (
              <div
                key={transation.time}
                className="transation flex  flex-col sm:flex-row justify-between items-center  p-1 "
              >
                <div className="left flex justify-start items-center space-x-3 w-full">
                  <div className="sign">{transation.icon}</div>
                  <div className="title-time-date flex  sm:flex-col  justify-center items-center space-x-2 sm:space-x-0">
                    <div className="title text-lg font-semibold">
                      {transation.title}
                    </div>
                    <div className="date-time flex space-x-2 text-sm text-lightGray">
                      <div className="date">{transation.date}</div>
                      <div className="time">{transation.time}</div>
                    </div>
                  </div>
                </div>
                <div className="right w-full  flex flex-col items-start sm:items-end sm:pr-2   pl-8 ">
                  <div className="profit text-lg">{transation.profitloss}</div>
                  <div className="details text-sm text-lightGray">
                    {transation.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className=" bg-lightPurple rounded-md font-semibold   p-2 w-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default RecentTransations;
