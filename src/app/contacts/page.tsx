// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import "./style.scss";

export default function Contacts() {
  return (
    <>
      <h1>contacts</h1>
      <p className="info">
        If you have any questions related to the wedding please contact our toastmadame or
        toastmaster.{" "}
      </p>
      <section className="wrapper">
        <div className="bg">
          <article className="toastmadame">
            <Image
              className="pic"
              src="/toastmadame.png"
              alt="Toastmasdame"
              width={150}
              height={150}
            />
            <div>
              <h3>Toastmadame</h3>
              <p className="name">
                Susanna <br />
                Charboti
              </p>
            </div>
            <div>
              <h4>Phone</h4>
              <p className="phone">+46 73 966 68 10</p>
            </div>
            <div>
              <h4>E-mail</h4>
              <p className="email">Nfz2A@example.com</p>
            </div>
          </article>
          <hr />
          <article className="toastmaster">
            <Image
              className="pic"
              src="/toastmaster.png"
              alt="Toastmaster"
              width={150}
              height={150}
            />
            <div>
              <h3>Toastmaster</h3>
              <p className="name">
                David <br /> Tran
              </p>
            </div>
            <div>
              <h4>Phone</h4>
              <p className="phone">+46 73 755 44 04</p>
            </div>
            <div>
              <h4>E-mail</h4>
              <p className="email">Nfz2A@example.com</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
