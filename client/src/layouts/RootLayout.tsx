import { Outlet } from "react-router";
import Header from "../components/header";

const RootLayout = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
