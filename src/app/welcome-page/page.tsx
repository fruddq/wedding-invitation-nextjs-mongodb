import Image from "next/image";
import "./style.scss";

export default function WelcomePage() {
  return (
    <>
      <section className="wrapper">
        <h1>Welcome to our wedding</h1>
        <h4>2024</h4>
        <p>
          A special invitation to <br />
          <span>**GUEST NAME**</span>
        </p>
      </section>
    </>
  );
}
