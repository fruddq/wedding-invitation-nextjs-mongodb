import prisma from "@/db";

async function updateRsvpDate(data: FormData, id: string) {
    const date = data.get("rsvp-date") as string
    const RSVPDate = new Date(date)

    await prisma.event.update({
        where: {
            id,
        },
        data: {
            RSVPDate,
        },
    })
}

export default updateRsvpDate;