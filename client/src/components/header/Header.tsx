import clsx from "clsx";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/SearchBar";
import NavItem from "./_components/NavItem";

const Header = () => (
  <header
    className={clsx(
      "min-h-16 flex",
      "bg-white-background border-b border-border",
    )}
  >
    <div
      className={clsx(
        "max-w-6xl w-full flex justify-between mx-auto items-center-safe",
      )}
    >
      {/* Right Section */}
      <section className={clsx("flex gap-8 items-center-safe")}>
        <Logo />

        <div className="flex gap-2">
          <NavItem to="/" label="홈" />
          <NavItem to="/" label="탐색" />
          <NavItem to="/" label="랭킹" />
          <NavItem to="/" label="뉴스" />
        </div>
      </section>

      {/* Left Section */}
      <section className={clsx("flex gap-8 items-center-safe")}>
        <SearchBar
          placeholder="종목명 · 종목코드 검색"
          className={clsx("bg-[#ededed]")}
        />

        <div className="flex gap-2">
          <Button>로그인</Button>
          <Button variant="primary">회원가입</Button>
        </div>
      </section>
    </div>
  </header>
);

export default Header;
