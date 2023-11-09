import Image from "next/image";
import "./styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <Image src="header1.svg" alt="Nani & Frudd" width={250} height={100} />
    </header>
  );
};

export default Header;
