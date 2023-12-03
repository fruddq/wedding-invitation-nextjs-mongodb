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
    guestList: GuestInterface[]
    RSVPDate: Date | null
    id: string
    eventName: string | null
    eventDate: Date
    password: string
    inviteLink: string | null
    eventPlannerUserId: string
}

export interface IGuestSettings {
    id: string
    inviteSent: boolean | null | string
    email: string | null
    phoneNumber: string | null
    attending: boolean | null | string
    hasResponded?: boolean | null | string
    diet: string | null
    allergies: string | null
    comments: string | null
    additionalGuestName: string
    additionalGuestAttending: boolean | null | string
    additionalGuestDiet: string | null
    additionalGuestAllergies: string | null
    additionalGuestComments: string | null
}