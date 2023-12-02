export type AdditionalGuest = {
    firstName: string
    lastName: string
    comments: string | null
    diet: string | null
    attending: boolean
    allergies: string | null
}
export interface GuestInterface {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phoneNumber: string | null
    diet: string | null
    comments: string | null
    eventId: string
    attending: boolean
    allergies: string | null
    hasResponded: boolean
    inviteSent: boolean
    additionalGuests: AdditionalGuest[]
}

export interface Event {
    guestlist: GuestInterface[]
    RSVPDate: Date | null
    id: string
    eventName: string | null
    eventDate: Date
    password: string
    inviteLink: string | null
    eventPlannerUserId: string
}

