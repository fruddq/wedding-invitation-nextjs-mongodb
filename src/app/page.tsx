// pages/login.js

import prisma from "@/db"
import Link from "next/link"
import { redirect } from "next/navigation"
import "../app/loginPage.scss"
import { getServerSession } from "next-auth/next"
import { options } from "./api/auth/[...nextauth]/options"

import Image from "next/image"

export default async function LoginPage() {
  const session = await getServerSession(options)
  console.log(session, "this is my session")

  return (
    <>
      <div className="wrapper">
        <div className="second-wrapper">
          <section className="container">
            <article className="welcome-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque minus minima, vel autem, tempore, veniam saepe
                aliquid mollitia laboriosam officiis possimus quibusdam deleniti
                accusantium reiciendis itaque? Neque ex nemo possimus?
              </p>
            </article>
            <Link href="/admin">Login</Link>
          </section>
          <section>
            <Image
              src="/champagne-and-bottle.png"
              alt="Champagne glass with popped champagne bottle"
              width={500}
              height={650}
            />
          </section>
        </div>
        <article className="links">
          <Link href="/about">About</Link>
        </article>
      </div>
    </>
  )
}
