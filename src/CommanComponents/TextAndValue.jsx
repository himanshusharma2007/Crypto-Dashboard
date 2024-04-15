import React from "react";

const TextAndValue = ({ text, value, label }) => {
  return (
    <div className="portfolio flex items-end space-x-3">
      <div>
        <div className="text-div text-sm text-purple font-semi">{text}</div>
        <div className="value-div text-2xl font-semibold ">{value}</div>
      </div>
      <div className="lable bg-lightPurple text-sm ">{label}</div>
    </div>
  );
};

export default TextAndValue;
