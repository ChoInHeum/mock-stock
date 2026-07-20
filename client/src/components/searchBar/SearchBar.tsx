import clsx from "clsx";
import { Search } from "lucide-react";
import cn from "../../utils/cn";

type SearchBarProps = React.ComponentProps<"input"> & {
  componentClassName?: string;
  onSearch?: (keyword: string) => void;
};

const SearchBar = ({
  onSearch,
  componentClassName,
  className,
  ...props
}: SearchBarProps) => {
  return (
    <div className={cn("relative flex", componentClassName)}>
      <Search
        size={20}
        className={clsx(
          "absolute left-3 top-1/2 -translate-y-1/2",
          "text-gray-text",
        )}
      />
      <input
        id="search-input"
        className={cn(
          "pl-11 pr-3 py-1.5",
          "border border-border rounded-xl outline-none",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
