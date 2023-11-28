import "./styles/header.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="header-mobile">
        <Image src="/header.svg" alt="logo" width={280} height={70} />
      </div>
      <div className="header-desktop">
        <Image src="/header.svg" alt="logo" width={580} height={200} />
      </div>
    </header>
  );
};

export default Header;
