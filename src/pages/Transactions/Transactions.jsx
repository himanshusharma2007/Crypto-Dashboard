import Button from "../../CommanComponents/button";
import DashboardLayout from "../../components/DashboardLayout";
import { BiDownload, BiSearch } from "react-icons/bi";
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { TbBrandTabler } from "react-icons/tb";
import BasicTable from "./TabTabel";
import TabCard from "./TabCard";
// import BasicTable from "./TabTabel";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div sx={{ p: 3 }}>{children}</div>}
    </div>
  );
}

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabTitle = [
    {
      title: "All",
      count: 212,
    },
    {
      title: "Deposit",
      count: 32,
    },
    {
      title: "Withdraw",
      count: 432,
    },
    {
      title: "Trade",
      count: 22,
    },
  ];
  function createData(id, date, type, amount, status) {
    return { id, date, type, amount, status };
  }
  const rows = [
    createData(
      "HD82NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
    createData(
      "H82NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
    createData(
      "XD82NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
    createData(
      "GD82NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
    createData(
      "PD82NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
    createData(
      "HD62NA2H",
      "2022 - 06 - 09",
      "INR Deposit",
      "+ ₹81,123.10",
      "Pending"
    ),
  ];
  return (
    <>
      <div className="">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs example"
          sx={{
            fontWeight: "bold",
            backgroundColor: "white",
            position: "relative",
            color: "black",
            borderBottom: "1px solid darkPurple",
            maxWidth: "100vw",
            marginBottom:"10px",
            borderRadius: "10px",
          }}
          className="flex justify-center items-center"
        >
          {TabTitle.map((tab, index) => (
            <Tab
              sx={{
                margin:{
                  xs:"auto",
                  sm:"0pc 20px 0px 20px"
                },
                padding: "0px",
                height: "20px",
                width: "auto",
                fontSize: "10px",
              }}
              key={index}
              label={`${tab.title} (${tab.count})`}
              className="bg-gray-200"
            />
          ))}

          <div className="input-box hidden lg:block absolute right-4 min-w-[200px] top-3  ">
            <BiSearch className="absolute  text-lightGray" fontSize={"24px"} />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none  pl-10 text-sm font-thin"
            />
          </div>
        </Tabs>
        {TabTitle.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            <BasicTable rows={rows} />
            <TabCard rows={rows} />
          </TabPanel>
        ))}
      </div>
    </>
  );
};

const Transition = () => {
  return (
    <div className="bg-lightPurple h-auto md:h-screen">
      <DashboardLayout title="Transactions">
        <div className="btn flex w-full justify-end mt-4 mb-4 pr-5 sm:pr-0 ">
          <Button text="Export CSV" icon={<BiDownload />} />
        </div>
        <MyTabs />
      </DashboardLayout>
    </div>
  );
};

export default Transition;
