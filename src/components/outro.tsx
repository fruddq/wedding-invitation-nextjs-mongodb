import Image from "next/image";
import "./styles/outro.scss";
import { PreviousAndNextBtn } from "./previousAndNextBtn";

export default function Outro() {
  return (
    <>
      <section className="wrapper-outro">
        <article className="text-container">
          <h1>See you on our big day!</h1>
          <p>Your presence will mean so much to us</p>
        </article>
        <article>
          <Image
            className="pic"
            src="/car.png"
            alt="The back of a car driving away"
            width={400}
            height={300}
          />
        </article>
        <article>
          <PreviousAndNextBtn />
        </article>
      </section>
    </>
  );
}
