import clsx from "clsx";
import cn from "../../utils/cn";

type Props = React.ComponentProps<"button"> & {
  variant?: "default" | "primary";
  children: React.ReactNode;
};

const variants = {
  default: clsx(
    " border border-border",
    " hover:border-primary hover:text-primary",
  ),
  primary: clsx(
    " bg-primary border border-transparent",
    " text-white-text",
    " hover:bg-emerald-700",
  ),
};

const Button = ({
  className,
  onClick,
  children,
  variant = "default",
}: Props) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-1.5",
      "rounded-xl",
      "transition-colors duration-200",
      "font-semibold",
      "cursor-pointer",
      variants[variant],
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
