import React from "react";
import TextAndValue from "../../CommanComponents/TextAndValue";
import Button from "../../CommanComponents/button";
import { BiDownload, BiUpload } from "react-icons/bi";

const DashboardPortolio = () => {
  return (
    <div className="w-full sm:w-full  mt-2 flex flex-col   lg:flex-row justify-between p-3 items-start space-y-2 xl:items-center rounded-md shadow-md bg-white">
      <div className="data flex flex-col md:flex-row space-y-3  md:space-x-10">
        <TextAndValue
          text={"Total Portfolio Value"}
          value={"₹ 112,312.24"}
          label={""}
        />
        <TextAndValue
          text={"Wallet Balances"}
          value={"22.39401000"}
          label={"BTC"}
        />
        <TextAndValue text={""} value={"₹ 112,312.24"} label={"INR"} />
      </div>
      <div className="btns flex space-x-3 text-white text-md ">
        <Button icon={<BiDownload fontSize={"16px"} />} text={"Deposit"} />
        <Button icon={<BiUpload />} text={"Withdrow"} />
      </div>
    </div>
  );
};

export default DashboardPortolio;
