import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options"
import prisma from "@/db"
import { redirect, useRouter } from "next/navigation"

// http://localhost:3000/api/auth/signout
const handleCreateEvent = async (data: FormData) => {
  "use server"

  const eventName = data.get("event-name") as string
  const eventDate = data.get("event-date") as string

  const session = await getServerSession(options)
  if (session && session.user && session.user.email) {
    const userId = await prisma.eventPlannerUser.findUnique({
      where: { email: session.user.email },
      select: { id: true },
    })

    if (userId) {
      const { id } = userId
      console.log(session, "this is my session")
      const newEvent = await prisma.event.create({
        data: {
          eventName,
          eventDate: new Date(eventDate),
          eventPlannerUserId: id,
        },
      })

      if (newEvent) {
        redirect(`/admin/event/${eventName}`)
      }
    }
  }
}

export default async function CreateEvent() {
  return (
    <section className="container">
      <h1>Create Event</h1>
      <article className="info-text">
        <p>Please enter Event details.</p>
      </article>
      <article className="form-container">
        <form action={handleCreateEvent}>
          <div>
            <label htmlFor="event-name">Event Name:</label>
            <input type="text" name="event-name" placeholder="Event Name" />
          </div>
          <div>
            <label htmlFor="event-date">Event Date:</label>
            <input type="date" name="event-date" placeholder="Given password" />
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </article>
    </section>
  )
}
