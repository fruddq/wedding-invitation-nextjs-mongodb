"use server"
import getEventFromInviteLink from "./getEventFromInviteLink";

interface GuestCredentials {
    firstName: string;
    lastName: string;
    password: string;
}

const checkGuestCredentials = async ({ firstName, lastName, password: inputPassword }: GuestCredentials) => {
    const event = await getEventFromInviteLink();

    if (!event) {
        return false;
    }

    const { guestList, password } = event;

    const matchingGuest = guestList.find(
        (guest) =>
            guest.firstName === firstName &&
            guest.lastName === lastName
    );

    const matchingPassword = password === inputPassword;

    return matchingGuest && matchingPassword ? matchingGuest : undefined;
};

export default checkGuestCredentials;