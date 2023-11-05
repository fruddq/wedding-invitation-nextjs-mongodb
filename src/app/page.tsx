// pages/login.js

import Link from "next/link"
import "../app/loginPage.scss"

export default async function LoginPage() {
  return (
    <>
      <div className="wrapper">
        <section className="container">
          <article className="welcome-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque minus minima, vel autem, tempore, veniam saepe aliquid
              mollitia laboriosam officiis possimus quibusdam deleniti
              accusantium reiciendis itaque? Neque ex nemo possimus?
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
  )
}
