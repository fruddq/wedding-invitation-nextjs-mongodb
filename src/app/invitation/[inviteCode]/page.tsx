"use client"
import { useState } from "react"
import LoginForm from "@/components/loginForm"
import WelcomePage from "@/components/welcomePage"

type AdditionalGuest = {
  firstName: string
  lastName: string
  comments: string | null
  diet: string | null
}
export interface GuestInterface {
  id: string
  firstName: string
  lastName: string
  email: string | null
  phoneNumber: number | null
  diet: string | null
  comments: string | null
  eventId: string
  attending: boolean
  hasResponded: boolean
  inviteSent: boolean
  additionalGuests: AdditionalGuest[]
}
export default function Invitation() {
  const [guest, setGuest] = useState<GuestInterface | null>(null)

  const storedGuestJSON = localStorage.getItem("guest")
  const storedGuest = storedGuestJSON ? JSON.parse(storedGuestJSON) : null

  if (storedGuest && !guest) {
    setGuest(storedGuest)
  }

  if (guest) {
    return <WelcomePage guest={guest} />
  }

  if (!guest) {
    return <LoginForm setGuest={setGuest} />
  }

  return null // Add a default return statement if necessary
}
