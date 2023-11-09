"use client"
import { useState } from "react"
import LoginForm from "@/components/loginForm"

type AdditionalGuest = {
  firstName: string
  lastName: string
  comments: string | undefined
  diet: string | undefined
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
}
export default function Invitation() {
  const [guest, setGuest] = useState<GuestInterface | null>(null)
  console.log(guest)

  return (
    <>
      {guest ? (
        <p>You are logged in as {guest.firstName}</p>
      ) : (
        <LoginForm setGuest={setGuest} />
      )}
    </>
  )
}
