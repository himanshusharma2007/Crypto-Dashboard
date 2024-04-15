import BottomContainer from "../../CommanComponents/bottomContainer";
import DashboardLayout from "../../components/DashboardLayout";
import CurrentPrice from "./CurrentPrice";
import DashboardPortolio from "./DashboardPortolio";
import RecentTransations from "./RecentTransations";
import infoOneImg from '../../images/Shapes@2x.png'
import infoTwoImg from '../../images/Shapes2.png'


const Dashboard = () => {
  return (
    <div className="Dashboard h-full lg:max-h-fit w-full xl:bg-lightPurple  ">
      <DashboardLayout title="Dashboard">
        <div className="dashboard-contant flex flex-col space-y-3 w-full ">
          <div className="first ">
            <DashboardPortolio />
          </div>
          <div className="second flex flex-col lg:flex-row  gap-5 mt-0 ">
            <CurrentPrice />
            <RecentTransations />
          </div>
          <div className="third flex flex-col sm:flex-row gap-5 w-full">
            <BottomContainer
              labelText={"Loans"}
              divText={
                "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              }
              image={{
                backgroundImage: `url(${infoOneImg})`,
              }}
              divStyle={{
                backgroundColor: "white",
                backgroundImage: `url(${infoOneImg})`,
              }}
              labelStyle={{
                backgroundColor: "#5F00D9",
                color: "white",
              }}
            />
            <BottomContainer
              labelText={"Contact"}
              image={{
                backgroundImage: `url(${infoTwoImg})`,
              }}
              divText={
                "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              }
              divStyle={{
                backgroundColor: "#5F00D9",

                color: "white",
              }}
              labelStyle={{
                backgroundColor: "white",
                color: "#5F00D9",
              }}
            />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
