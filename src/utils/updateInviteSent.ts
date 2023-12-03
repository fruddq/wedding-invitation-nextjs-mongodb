"use server"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import prisma from "@/db";

const updateInviteSent = async ({ id, inviteSent }: GuestInterface) => {

    const result = await prisma.guest.update({
        where: { id },
        data: {
            inviteSent: !inviteSent,
        },
    });

    return result.inviteSent

};

export default updateInviteSent;