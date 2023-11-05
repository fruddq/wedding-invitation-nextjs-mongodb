// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import "./style.scss";

export default function DressCode() {
  return (
    <section className="wrapper">
      <article className="dress-code">
        <h1>Wedding dress code</h1>
        <h3>Dressy casual / semi-formal attire</h3>
        <div>
          <p>Here are some reading tips:</p>
          <Link href="/">Link 1</Link> <br />
          <Link href="/">Link 1</Link>
        </div>
      </article>
      <article className="hide-mobile">
        <Image src="/attire.png" alt="Dress code" width={400} height={600} />
      </article>
    </section>
  );
}
