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

    await prisma.event.update({
        where: { id }, // Replace with the actual ID of the event you want to update
        data: {
            guestlist: {
                create: [
                    {
                        firstName,
                        lastName,
                        additionalGuests,
                    },
                ],
            },
        },
    })
}

export default inviteGuest;