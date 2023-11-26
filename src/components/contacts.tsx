// import Image from "next/image";
import Image from "next/image";

import "./styles/contacts.scss";

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contatcs-title">Contacts</h1>
      <p className="info">
        If you have any questions related to the wedding please contact our toastmadame or
        toastmaster.{" "}
      </p>
      <section className="wrapper-contacts">
        <div className="bg">
          <article className="toastmadame">
            <Image
              className="pic"
              src="/toastmadame.png"
              alt="Toastmasdame"
              width={150}
              height={150}
            />
            <div className="wrapper-toast">
              <h3 className="contacts-subtitle">Toastmadame</h3>
              <p className="name">
                Susanna <br />
                Charboti
              </p>
            </div>
            <div className="wrapper-toast">
              <h4 className="contacts-subtitle">Phone</h4>
              <p className="phone">+46 73 966 68 10</p>
            </div>
            <div className="wrapper-toast">
              <h4 className="contacts-subtitle">E-mail</h4>
              <p className="email">susanna.charboti@outlook.com</p>
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
            <div className="wrapper-toast">
              <h3 className="contacts-subtitle">Toastmaster</h3>
              <p className="name">
                David <br /> Tran
              </p>
            </div>
            <div className="wrapper-toast">
              <h4 className="contacts-subtitle">Phone</h4>
              <p className="phone">+46 73 755 44 04</p>
            </div>
            <div className="wrapper-toast">
              <h4 className="contacts-subtitle">E-mail</h4>
              <p className="email">davidtran1990@gmail.com</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
