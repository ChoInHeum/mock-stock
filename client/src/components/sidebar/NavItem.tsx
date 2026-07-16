import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

type NavItemProps = {
  path: string;
  icon: LucideIcon;
  label: string;
};

const NavItem = ({ path, icon: Icon, label }: NavItemProps) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      clsx(
        "flex flex-row px-4 py-4 gap-4",
        "rounded-xl",
        isActive ? "bg-primary/10 text-emerald-800" : "hover:bg-neutral-100",
      )
    }
  >
    <Icon />
    <p>{label}</p>
  </NavLink>
);

export default NavItem;
