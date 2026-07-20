import clsx from "clsx";
import { NavLink } from "react-router";

type props = {
  to: string;
  label: string;
};

const NavItem = ({ to, label }: props) => (
  <NavLink
    to={to}
    className={clsx(
      "px-3 py-2",
      "rounded-xl",
      "text-neutral-700",
      "transition-colors duration-200 hover:bg-neutral-200 hover:text-black-text",
    )}
  >
    <span className="text-inherit ">{label}</span>
  </NavLink>
);

export default NavItem;
