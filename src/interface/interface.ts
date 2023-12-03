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
    email: string
    phoneNumber: string
    attending: boolean
    hasResponded?: boolean
    diet: string
    allergies: string
    comments: string
    "additional-guest-attending-1": string
    "additional-guest-diet-1": string
    "additional-guest-allergies-1": string
    "additional-guest-comments-1": string
}