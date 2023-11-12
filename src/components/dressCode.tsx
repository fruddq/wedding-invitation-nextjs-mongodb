// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import "./styles/dressCode.scss";

export default function DressCode() {
  return (
    <section className="wrapper-dresscode">
      <article className="dress-code">
        <h1>
          Wedding <br />
          dress code
        </h1>
        <h3>Dressy casual / semi-formal attire</h3>
        <div className="tips">
          {/* TODO: ADD READING LINKS */}
          <p>Here are some reading tips:</p>
          <Link href="/">Link 1</Link> <br />
          <Link href="/">Link 1</Link>
        </div>
      </article>
      <article className="hide-mobile">
        <Image src="/dresscode.png" alt="Dress code" width={500} height={600} />
      </article>
    </section>
  );
}
