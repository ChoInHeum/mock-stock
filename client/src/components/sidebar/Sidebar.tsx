import clsx from "clsx";
import { ChartLine, Compass, House, Trophy } from "lucide-react";
import { NavLink } from "react-router";
import NavItem from "./NavItem";

const NAV_ITEMS = [
  { path: "/", icon: House, label: "홈" },
  { path: "/search", icon: Compass, label: "탐색" },
  { path: "/ranking", icon: Trophy, label: "랭킹" },
] as const;

const SideBar = () => {
  return (
    <div
      className={clsx(
        "hidden w-full max-w-75 p-6",
        "border-r border-r-border",
        "xl:block",
      )}
    >
      <NavLink to="/" className="flex flex-row mb-6 gap-3">
        <div className={clsx("p-2.5", "bg-primary rounded-lg")}>
          <ChartLine className="text-white" size={20} strokeWidth={3} />
        </div>

        <div className={clsx("flex flex-row items-center-safe")}>
          <span className="text-2xl font-bold">Mock</span>
          <span className="text-2xl text-primary font-bold">Stock</span>
        </div>
      </NavLink>

      <div className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
