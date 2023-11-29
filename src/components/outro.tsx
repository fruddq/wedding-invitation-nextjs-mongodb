import Image from "next/image"
import "./styles/outro.scss"

export default function Outro() {
  return (
    <>
      <section className="wrapper-outro">
        <article className="text-container">
          <h1 className="outro-title">
            See you on our <br />
            big day!
          </h1>
          <p className="outro-text">Your presence will mean so much to us</p>
        </article>
        <article>
          <Image
            className="outro-pic"
            src="/car.png"
            alt="The back of a car driving away"
            width={400}
            height={300}
          />
        </article>
      </section>
    </>
  )
}
