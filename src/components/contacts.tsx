// import Image from "next/image";
import Image from "next/image";

import "./styles/contacts.scss";

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contatcs-title">Contacts</h1>
      <p className="info">
        If you have any questions related to the wedding please contact our toastmadame or
        toastmaster or the bride and groom.{" "}
      </p>
      <section className="wrapper-contacts">
        <div className="bg">
          <div className="contacts-container">
            <article className="toastmadame">
              <Image
                className="pic"
                src="/toastmadame-profile-pic.png"
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
            <hr className="contacts-hr-top" />
            <article className="toastmaster">
              <Image
                className="pic"
                src="/toastmaster-profile-pic.png"
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
              </div>{" "}
              <br />
              <hr className="contacts-hr-bottom" />
            </article>
          </div>
          <article className="bride-groom">
            <h4 className="contacts-subtitle bride-groom-title">Bride & Groom</h4>
            <p>
              Nani Dam: +46 70 016 51 44 <br /> Frudd Dinh: +46 70 200 19 33
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
