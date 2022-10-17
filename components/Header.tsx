import { HeaderFixed } from "./HeaderFixed";
import { NavLink } from "./Nav/Link";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {

  return (
    <header className="mb-20">
      <nav className="relative cursor-pointer before:absolute before:content=[''] before:-z-10 before:w-full before:h-[1px] before:bg-gray-300 before:left-0 before:bottom-0 flex justify-center gap-2 my-4 max-w-[90vw] mx-auto px-6 pt-4">
        <NavLink pathName="">Głowna</NavLink>
        <NavLink pathName="products/1">Produkty</NavLink>
        <NavLink pathName="about">O nas</NavLink>
      </nav>
      <HeaderFixed/>
    </header>
  );
};
