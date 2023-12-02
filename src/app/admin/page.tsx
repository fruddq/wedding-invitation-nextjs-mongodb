import "./style.scss"
import Image from "next/image"

import next from "next"
import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import Link from "next/link"
import getUserId from "@/utils/getUserId"
import prisma from "@/db"
import { Event, Guest } from "@prisma/client"
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
// interface Event {
//   id: string; // annotated with @id, @default(auto()), @map("_id"), and @db.ObjectId
//   eventName: string;
//   eventDate: Date;
//   RSVPDate?: Date;
//   eventPlannerUserId: string; // annotated with @db.ObjectId
//   password?: string;
//   inviteLink?: string;
//   guestList: Guest[];
// }

export default async function Admin() {
  // const session = await getServerSession(options)
  // console.log(session, "this is my session")
  const id = await getUserId()

  let events: Event[] = []
  if (id) {
    events = await prisma.event.findMany({
      where: {
        eventPlannerUserId: id,
      },
      // include: { guestList: true },
    })

    console.log(events)
  }

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
            {events.length > 0 ? (
              <ul>
                {events.map(({ id, eventName }) => (
                  <li key={id}>
                    <Link href={`/admin/event/${eventName}`}>{eventName}</Link>
                    <div className="icons">
                      <Image
                        src="edit-icon.svg"
                        alt="Edit icon"
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
                ))}
              </ul>
            ) : (
              <p>No events found.</p>
            )}
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
