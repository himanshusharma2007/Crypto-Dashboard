import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopPanel from "./topPanel";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const DashboardLayout = ({ title, children }) => {
  const [showAction, setShowAction] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // Set to false initially

  useEffect(() => {
    const handleResize = () => {
      if (document.body.clientWidth < 1000) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
  
    // Initial check for screen size
    handleResize();
  
    // Listen for window resize events
    window.addEventListener("resize", handleResize);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const toggleAction = (flag) => {
    if (showAction === true || flag === 1) {
      setShowAction(!showAction); // Toggle the value of showAction
      flag = 0;
    }
  };

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div onClick={toggleAction} className="flex relative  w-auto h-auto">
      {showSidebar ? (
        <GrClose
          onClick={handleClick}
          className="lg:hidden absolute z-40 top-6 left-2 cursor-pointer"
          fontSize="30px"
        />
      ) : (
        <RxHamburgerMenu
          onClick={handleClick}
          className="lg:hidden absolute z-40 top-4 left-2 cursor-pointer"
          fontSize="30px"
        />
      )}
      <Sidebar showSidebar={showSidebar} />
      <div className="right flex-col">
        <TopPanel
          showAction={showAction}
          setShowAction={setShowAction}
          toggleAction={toggleAction}
          title={title}
        />
        <div className="p-0 sm:pl-16 sm:pr-16   h-auto w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
