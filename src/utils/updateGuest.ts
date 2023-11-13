"use server"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import { FormValues } from "@/components/rsvp";
import prisma from "@/db";

const updateGuest = async (guestInfo: FormValues, { id, additionalGuests }: GuestInterface) => {
    const {
        attending,
        phoneNumber: phoneNumberString,
        email,
        diet,
        allergies,
        comments,
        'additional-guest-attending-1': additionalGuestAttending,
        'additional-guest-diet-1': additionalGuestDiet,
        'additional-guest-allergies-1': additionalGuestAllergies,
        'additional-guest-comments-1': additionalGuestComments
    } = guestInfo;


    const updatedGuest = await prisma.guest.update({
        where: { id },
        data: {
            email,
            phoneNumber: Number(phoneNumberString),
            diet,
            comments,
            allergies,
            attending: Boolean(attending),
            hasResponded: true,
            additionalGuests: [
                {
                    firstName: additionalGuests[0].firstName,
                    lastName: additionalGuests[0].lastName,
                    comments: additionalGuestComments,
                    diet: additionalGuestDiet,
                    attending: Boolean(additionalGuestAttending),
                    allergies: additionalGuestAllergies
                }
            ],
        }
    });

    return updatedGuest
};

export default updateGuest;