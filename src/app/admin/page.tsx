import "./style.scss"
import Image from "next/image"

import next from "next"
import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import Link from "next/link"
// http://localhost:3000/api/auth/signout
// const handleLogin = async (data: FormData) => {
//   "use server"

//   const password = data.get("password")
//   const email = data.get("email") as string

//   const existingUser = await prisma.eventPlannerUser.findUnique({
//     where: { email },
//   })

//   if (existingUser) {
//     password === existingUser.password && redirect("/admin")
//   }
// }

export default async function Admin() {
  const session = await getServerSession(options)
  console.log(session, "this is my session")

  return (
    <>
      <h1>
        Admin
        <span>
          <button className="logout-btn">Logout</button>
        </span>
      </h1>
      <section className="wrapper">
        <article>
          <Link href="/admin/create-event">Create Event</Link>
        </article>
        <div className="events">
          <article className="current-events">
            <h2>Current events</h2>
            <ul>
              <li>
                current event
                <div className="icons">
                  <Image
                    src="edit-icon.svg"
                    alt="Trash can icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="trash-can.svg"
                    alt="Trash can icon"
                    width={30}
                    height={30}
                  />
                </div>
              </li>
            </ul>
          </article>
          <article className="past-events">
            <h2>Past events</h2>
            <ul>
              <li>
                past event
                <div className="icons">
                  <Image
                    src="preview-icon.svg"
                    alt="Trash can icon"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="trash-can.svg"
                    alt="Trash can icon"
                    width={30}
                    height={30}
                  />
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
