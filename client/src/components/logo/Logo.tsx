import clsx from "clsx";
import { ChartLine } from "lucide-react";
import { NavLink } from "react-router";
import cn from "../../utils/cn";

type DisplayType = "icon" | "text" | "both";

type LogoProps = {
  componentClassName?: string;
  displayType?: DisplayType;
};

const Logo = ({ componentClassName, displayType = "both" }: LogoProps) => (
  <NavLink to="/" className={cn(componentClassName, "flex flex-row gap-3")}>
    <div
      className={clsx(
        displayType === "both" || displayType === "icon" ? "block" : "hidden",
        "size-fit p-2",
        "bg-linear-to-br from-emerald-500 to-primary rounded-lg",
      )}
    >
      <ChartLine className="text-white" size={16} strokeWidth={3} />
    </div>

    <div
      className={clsx(
        displayType === "both" || displayType === "text" ? "flex" : "hidden",
        "flex-row items-center-safe",
      )}
    >
      <span className="text-xl font-bold">Mock</span>
      <span className="text-xl text-primary font-bold">Stock</span>
    </div>
  </NavLink>
);

export default Logo;
