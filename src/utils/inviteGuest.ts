"use server"
import prisma from "@/db";

async function inviteGuest(data: FormData, id: string) {
    const firstName = data.get("first-name") as string
    const lastName = data.get("last-name") as string
    const additionalGuestFirstName = data.get(
        "additional-guest-first-name"
    ) as string
    const additionalGuestLastName = data.get(
        "additional-guest-last-name"
    ) as string

    const additionalGuests = {
        firstName: additionalGuestFirstName,
        lastName: additionalGuestLastName,
    }

    const result = await prisma.event.update({
        where: { id },
        data: {
            guestList: {
                create: [
                    {
                        firstName,
                        lastName,
                        additionalGuests,
                    },
                ],
            },
        },
        include: {
            guestList: true,
        },
    })


    return result
}

export default inviteGuest;