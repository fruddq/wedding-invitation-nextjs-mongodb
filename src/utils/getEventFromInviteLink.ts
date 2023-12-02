"use server"
import prisma from "@/db";

const getEventFromInviteLink = async () => {

    const event = await prisma.event.findFirst({
        where: {
            inviteLink: "NaniFruddWedding2024"
        },
        include: { guestList: true },
    })

    if (event) {
        return event
    }
};

export default getEventFromInviteLink;