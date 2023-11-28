import HeaderSvgDesktop from "./headerSvgDesktop";
import HeaderSvgMobile from "./headerSvgMobile";
import "./styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <HeaderSvgDesktop />
      <HeaderSvgMobile />
    </header>
  );
};

export default Header;
