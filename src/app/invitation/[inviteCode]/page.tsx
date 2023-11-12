"use client"
import { useState } from "react"
import LoginForm from "@/components/loginForm"
import WelcomePage from "@/components/welcomePage"
import Rsvp from "@/components/rsvp"
import InvitationMenu from "@/components/invitationMenu"

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
  const [showWelcomePage, setShowWelcomePage] = useState(true)
  const [showTheProposal, setShowTheProposal] = useState(false)
  const [showSaveTheDate, setShowSaveTheDate] = useState(false)
  const [showTheBigDay, setShowTheBigDay] = useState(false)
  const [showDressCode, setShowDressCode] = useState(false)
  const [showAdditionalInformation, setShowAdditionalInformation] =
    useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const [showRsvp, setShowRsvp] = useState(false)
  const [showSeeYou, setShowSeeYou] = useState(false)

  const storedGuestJSON = localStorage.getItem("guest")
  const storedGuest = storedGuestJSON ? JSON.parse(storedGuestJSON) : null

  if (storedGuest && !guest) {
    setGuest(storedGuest)
  }

  // return <InvitationMenu />

  if (!guest) {
    return <LoginForm setGuest={setGuest} />
  }

  if (guest) {
    return (
      <>
        <InvitationMenu
          showWelcomePage={showWelcomePage}
          setShowWelcomePage={setShowWelcomePage}
          showTheProposal={showTheProposal}
          setShowTheProposal={setShowTheProposal}
          showSaveTheDate={showSaveTheDate}
          setShowSaveTheDate={setShowSaveTheDate}
          showTheBigDay={showTheBigDay}
          setShowTheBigDay={setShowTheBigDay}
          showDressCode={showDressCode}
          setShowDressCode={setShowDressCode}
          showAdditionalInformation={showAdditionalInformation}
          setShowAdditionalInformation={setShowAdditionalInformation}
          showContacts={showContacts}
          setShowContacts={setShowContacts}
          showRsvp={showRsvp}
          setShowRsvp={setShowRsvp}
          showSeeYou={showSeeYou}
          setShowSeeYou={setShowSeeYou}
        />
        {showWelcomePage && <WelcomePage guest={guest} />}
      </>
    )
  }

  return null
}

// Logout-btn
// Menu navigation
// 1. Welcome page
// 2. THE PROPOSAL
// 3. Save The date
// 4. THE BIG DAY
// 5. Dress code
// 6. Addtional information
// 7. contacts
// 8. RSVP
// 9. See you
