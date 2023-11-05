// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import "./style.scss";

export default function Contacts() {
  return (
    <>
      <h1>contacts</h1>
      <section>
        <article className="toastmadame">
          <Image src="/toastmadame.png" alt="Toastmasdame" width={100} height={100} />

          <p>
            Toastmadame <span>Susanna Charboti</span>
          </p>
          <p>
            Phone <span>+46 73 966 68 10</span>
          </p>
          <p>
            E-mail <span>Nfz2A@example.com</span>
          </p>
        </article>
        <article className="toastmaster">
          <Image src="/toastmaster.png" alt="Toastmaster" width={100} height={100} />
          <p>
            Toastmaster <span>David Tran</span>
          </p>
          <p>
            Phone <span>+46 73 755 44 04</span>
          </p>
          <p>
            E-mail <span>Nfz2A@example.com</span>
          </p>
        </article>
      </section>
      <section>
        <Image
          src="/champagne-and-bottle.png"
          alt="Champagne glass with popped champagne bottle"
          width={500}
          height={650}
        />
      </section>
    </>
  );
}
