import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({ showSidebar }) => {
  return (
    <>
      {showSidebar && (
        <div className="side-bar w-screen sm:w-[60vw]  text-xl absolute h-screen flex-col justify-start  pt-12  items-center text-gray-500 lg:static shadow-lg lg:min-w-[20vw]  lg:flex bg-white z-10">
          <div className="box w-[90%] h-full space-y-0  relative mr-3 pl-1">
            <div className="logo text-lg sm:text-[20px] cursor-pointer hover:underline underline-offset-2 p-2 pl-3 text-darkPurple font-semibold ">
              @HimanshuSharma
            </div>
            <Link to="/dashboard">
              <div className="item  hover:text-gray-950 pl-3  w-full h-14 rounded-md cursor-pointer hover:bg-gray-200 p-2  flex flex-row  space-x-2 items-center">
                <RiDashboardFill />
                <div className="text">Dashboard</div>
              </div>
            </Link>
            <Link to="/transactions">
              <div className="item  hover:text-gray-950 pl-3  w-full h-14 rounded-md cursor-pointer hover:bg-gray-200 p-2  flex flex-row  space-x-2 items-center">
                <TbArrowsDoubleSwNe />
                <div className="text">Transations</div>
              </div>
            </Link>
            <Link to="/support">
              <div className="item  hover:text-gray-950 pl-3  w-full h-14 rounded-md cursor-pointer hover:bg-gray-200 p-2  flex flex-row  space-x-2 items-center absolute bottom-2">
                <BiSupport />
                <div className="text">Support</div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
