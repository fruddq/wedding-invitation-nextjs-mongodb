import prisma from "@/db";
import getUserId from "./getUserId";

const getEvent = async (eventName: string) => {
    const userId = await getUserId()

    if (userId) {
        const event = await prisma.event.findFirst({
            where: {
                eventName,
                eventPlannerUserId: userId, // Optionally filter by eventPlannerUserId if needed
            },
            include: { guestList: true },
        })

        if (event) {
            return event
        }
    }
};

export default getEvent;