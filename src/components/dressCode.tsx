// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import "./styles/dressCode.scss";

export default function DressCode() {
  return (
    <section className="wrapper-dresscode">
      <article className="dress-code">
        <h1 className="dress-code-title">
          Wedding <br />
          dress code
        </h1>
        <h3 className="dress-code-subtitle">Semi-formal attire</h3>
        <div className="tips">
          <div className="img-wrapper">
            <Image
              className="thesrpuce-img"
              src={"/the-spruce-attire.webp"}
              alt="The Spruce Attire guidelines"
              width={330}
              height={240}
            />
          </div>
          <h4 className="tips-header">Here are some reading tips:</h4>
          <Link
            href="https://www.thespruce.com/semi-formal-attire-guidelines-1216504"
            target="_blank"
          >
            - What Is Semiformal Attire
          </Link>{" "}
          <br />
          <Link
            href="https://www.theknot.com/content/what-to-wear-semi-formal"
            target="_blank"
          >
            - Semi-Formal Wedding Guest Attire 101
          </Link>
          <br />{" "}
          <Link
            href="https://www.hockerty.com/en/blog/semi-formal-mens-attire"
            target="_blank"
          >
            - Semi formal mens attire
          </Link>
        </div>
      </article>
      <article className="hide-mobile">
        {/* <Image src="/dresscode.png" alt="Dress code" width={500} height={600} /> */}
        <Image
          className="spruce-img-desktop"
          src={"/the-spruce-attire.webp"}
          alt="The Spruce Attire guidelines"
          width={650}
          height={450}
        />
      </article>
    </section>
  );
}
