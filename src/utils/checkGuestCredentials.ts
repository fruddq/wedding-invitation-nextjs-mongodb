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

    const matchingPasssword = password === inputPassword;
    // @TODO FIX THIS, Change schema additionalguests should be an array of objects
    // @TODO make admin/event/eventName accept additional guests input 

    console.log(matchingGuest, "matching guest");
    console.log(matchingPasssword, "matching password");

    return matchingGuest ? true : false;
};

export default checkGuestCredentials;