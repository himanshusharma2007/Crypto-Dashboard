import DashboardLayout from "../../components/DashboardLayout";
import { IoMdMail } from "react-icons/io";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Input, TextField } from "@mui/material";
import { IoChatbubbleSharp } from "react-icons/io5";
import BottomContainer from "../../CommanComponents/bottomContainer";
import infoTwoImg from "../../images/Shapes2.png";

// import Input from "postcss/lib/input";
const Support = () => {
  return (
    <div className="Dashboard h-auto lg:max-h-screen w-screen xl:bg-lightPurple ">
      <DashboardLayout title="Support">
        <div className="main mt-2 w-full flex flex-col space-y-3  lg:flex-row justify-between ">
          <div className="left w-[100%] lg:w-[40%] ml-2 sm:ml-0 bg-white sm:bg-transparent  p-2">
            <IoMdMail className="text-darkPurple" fontSize={"24px"} />
            <div className="head text-[32px] font-medium ">Contact us</div>
            <div className="text w-full">
              Have a question or just want to know more? Feel free to reach out
              to us.
            </div>
          </div>
          <div className="right w-full lg:w-[50%] bg-white p-3 pr-4 pl-4 rounded-lg shadow-md mb-3">
            <div className="form w-full flex flex-col   space-y-1 ">
              <div className="heading  font-medium">
                You will receive response within 24 hours of time of submit.
              </div>
              <div className="name w-full flex space-x-1">
                <FormControl sx={{ width: "100%", display: "flex" }}>
                  <InputLabel htmlFor="my-input">Name</InputLabel>
                  <Input
                    sx={{ width: "100%" }}
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
                <FormControl sx={{ width: "100%", display: "flex" }}>
                  <InputLabel htmlFor="my-input">Surname</InputLabel>
                  <Input
                    sx={{ width: "100%" }}
                    id="my-input"
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
              </div>
              <div className="email">
                <FormControl sx={{ width: "100%", display: "flex" }}>
                  <InputLabel htmlFor="my-input">Email</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
              </div>
              <div className="textfield">
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={3}
                />
              </div>
              <div className="text">
                I agree with{" "}
                <span className="text-darkPurple cursor-pointer">
                  Terms & Conditions.
                </span>
              </div>
              <div className="btns flex flex-col w-full space-y-2">
                <button className=" bg-lightPurple rounded-md font-medium   p-1 w-full text-gray-400 hover:text-gray-600">
                  Send a Message
                </button>
                <button className=" bg-lightPurple rounded-md font-medium p-1 w-full text-gray-400 hover:text-gray-600">
                  Book a Metting
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex flex-col lg:flex-row justify-between mt-3 ml-2 ">
          <div className="left mb-2 bg-white sm:bg-transparent  p-2 sm:p-0">
            <IoChatbubbleSharp className="text-darkPurple " fontSize={"24px"} />
            <div className="head text-[32px] font-medium">Live Chat</div>
            <div className="text">
              Don’t have time to wait for the answer? Chat with us now.
            </div>
          </div>
          <BottomContainer
            labelText={"Chatbox"}
            image={{
              backgroundImage: `url(${infoTwoImg})`,
            }}
            divText={"Chat with us Now"}
            divStyle={{
              backgroundColor: "#5F00D9",
              color: "white",
            }}
            labelStyle={{
              marginBottom: "15px",
              backgroundColor: "white",
              color: "#5F00D9",
            }}
          />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Support;
