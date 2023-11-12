import Image from "next/image";
import "./styles/outro.scss";

export default function Outro() {
  return (
    <>
      <section className="wrapper">
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
      </section>
    </>
  );
}
