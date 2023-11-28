"use server"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import prisma from "@/db";

const updateInviteSent = async ({ id, inviteSent }: GuestInterface) => {

    await prisma.guest.update({
        where: { id },
        data: {
            inviteSent: !inviteSent,
        },
    });
};

export default updateInviteSent;