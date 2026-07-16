import { Outlet } from "react-router";
import SideBar from "../components/sidebar";

const RootLayout = () => {
  return (
    <div className="flex-1 flex flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
