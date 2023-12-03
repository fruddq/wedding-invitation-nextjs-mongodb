"use server"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import prisma from "@/db";
import { IGuestSettings } from "@/interface/interface";

const adminUpdateGuest = async ({
    id,
    inviteSent,
    email,
    phoneNumber,
    attending,
    hasResponded,
    diet,
    allergies,
    comments,
    additionalGuestName,
    additionalGuestAttending,
    additionalGuestDiet,
    additionalGuestAllergies,
    additionalGuestComments,
}: IGuestSettings) => {

    let additionalGuestFirstName = ""
    let additionalGuestLastName = ""
    if (additionalGuestName) {

        const [tempFirstName, tempLastName] = additionalGuestName.split(' ')
        additionalGuestFirstName = tempFirstName
        additionalGuestLastName = tempLastName
    }

    const updatedGuest = await prisma.guest.update({
        where: { id },
        data: {
            inviteSent: inviteSent === "true",
            email,
            phoneNumber,
            diet,
            comments,
            allergies,
            attending: attending === "true",
            hasResponded: hasResponded === "true",
            // @TODO Fix schema: Make additional guest single, not an array
            additionalGuests: [
                {
                    firstName: additionalGuestFirstName,
                    lastName: additionalGuestLastName,
                    comments: additionalGuestComments,
                    diet: additionalGuestDiet,
                    attending: additionalGuestAttending === "true",
                    allergies: additionalGuestAllergies
                }
            ],
        }
    });

    return updatedGuest
};

export default adminUpdateGuest;