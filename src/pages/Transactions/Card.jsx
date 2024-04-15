import React from 'react'
// rowDataFormat(
//       id"HD82NA2H",
//       type"INR Deposit",
//       amount"+ ₹81,123.10",
//       date"2022 - 06 - 09",
//       status"Pending"
//     ),
const Card = ({row}) => {
  return (
    <div className="card bg-white w-full h-[150px] p-2 rounded-md shadow-lg">
      <div className="flex justify-between h-[136px]  ">
        <div className="left  flex flex-col justify-around h-full ">
          <div className="title font-medium text-lg">{row.type}</div>
          <div className="amount">{row.amount}</div>
        </div>
        <div className="right h-full flex flex-col justify-around">
          <div className="date">{row.date} </div>
          <div className="status bg-yellow-500 text-white text-center rounded-md">
            {row.status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
