import prisma from "@/db";

async function updateEventPassword(data: FormData, id: string) {
    const password = data.get("password") as string;

    await prisma.event.update({
        where: { id },
        data: { password },
    });
}

export default updateEventPassword;