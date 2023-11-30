"use server";
import prisma from "@/db";

async function updateEventPassword(data: FormData, id: string) {
    const password = data.get("password") as string;

    const result = await prisma.event.update({
        where: { id },
        data: { password },
    });

    console.log("succes")
    return result.password
}

export default updateEventPassword;