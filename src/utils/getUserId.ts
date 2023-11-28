import { options } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/db";
import { getServerSession } from "next-auth";

const getUserId = async () => {
    const session = await getServerSession(options)
    if (session && session.user && session.user.email) {
        const userId = await prisma.eventPlannerUser.findUnique({
            where: { email: session.user.email },
            select: { id: true },
        })

        if (userId) {
            return userId.id
        }

    }
    return null;
};

export default getUserId;