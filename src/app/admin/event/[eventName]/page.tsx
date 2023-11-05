import prisma from "@/db"
import getUserId from "@/utils/getUserId"

export default async function Event({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string }
}) {
  // Nextjs har en bugg som visar fel param( I detta fall filer, söker efter filer med ".")
  if (eventName.includes(".")) {
    return null
  }

  const userId = await getUserId()
  if (userId) {
    const event = await prisma.event.findFirst({
      where: {
        eventName, // Provide the actual event name here
        eventPlannerUserId: userId, // Optionally filter by eventPlannerUserId if needed
      },
    })

    if (event) {
      return (
        <div>
          <h1>Event: {event.eventName}</h1>
          <p>Date: {event.eventDate.toLocaleDateString()}</p>
        </div>
      )
    }
  }
}
