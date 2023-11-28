// pages/login.js

import Link from "next/link";
import "../app/loginPage.scss";
import Contacts from "@/components/contacts";
import AdditionalInfo from "./additional-info/page";

export default async function LoginPage() {
  return (
    <>
      <div className="wrapper">
        <section className="container">
          <article className="welcome-text">
            <p>
              <b>
                THIS IS ADMIN PAGE. <br />
              </b>
              If you are a wedding guest, please re-check so that you have the correct URL
            </p>
          </article>
          <article className="login">
            <Link href="/admin">Login</Link>
          </article>
        </section>
        {/* <section>
            <Image
              src="/champagne-and-bottle.png"
              alt="Champagne glass with popped champagne bottle"
              width={500}
              height={650}
            />
          </section> */}
        <section className="links">
          <Link href="/about">About</Link>
        </section>
      </div>
    </>
  );
}
