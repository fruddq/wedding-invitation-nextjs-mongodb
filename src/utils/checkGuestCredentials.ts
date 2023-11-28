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

    const { guestlist, password } = event;

    const matchingGuest = guestlist.find(
        (guest) =>
            guest.firstName === firstName &&
            guest.lastName === lastName
    );

    const matchingPassword = password === inputPassword;

    return matchingGuest && matchingPassword ? matchingGuest : undefined;
};

export default checkGuestCredentials;