import Image from "next/image";
import "./styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <Image src="header.svg" alt="Nani & Frudd" width={500} height={200} />
    </header>
  );
};

export default Header;
