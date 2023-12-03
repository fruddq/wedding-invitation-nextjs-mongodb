"use server"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import prisma from "@/db";
import { IGuestSettings } from "@/interface/interface";

const adminUpdateGuest = async ({
    id,
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

    console.table({
        id,
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
    })

    const [additionalGuestFirstName, additionalGuestLastName] = additionalGuestName.split(' ')

    const updatedGuest = await prisma.guest.update({
        where: { id },
        data: {
            email,
            phoneNumber,
            diet,
            comments,
            allergies,
            attending: Boolean(attending),
            hasResponded: true,
            // @TODO Fix schema: Make additional guest single, not an array
            additionalGuests: [
                {
                    firstName: additionalGuestFirstName,
                    lastName: additionalGuestLastName,
                    comments: additionalGuestComments,
                    diet: additionalGuestDiet,
                    attending: Boolean(additionalGuestAttending),
                    allergies: additionalGuestAllergies
                }
            ],
        }
    });
    console.log(updatedGuest)

    return 1
};

export default adminUpdateGuest;