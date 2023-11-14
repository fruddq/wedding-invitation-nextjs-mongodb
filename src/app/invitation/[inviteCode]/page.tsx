"use client"
import { useEffect, useState } from "react"
import LoginForm from "@/components/loginForm"
import WelcomePage from "@/components/welcomePage"
import InvitationMenu from "@/components/invitationMenu"
import Proposal from "@/components/proposal"
import SaveTheDate from "@/components/saveTheDate"
import TheBigDay from "@/components/theBigDay"
import DressCode from "@/components/dressCode"
import AdditionalInfo from "@/components/additional-info"
import Contacts from "@/components/contacts"
import Rsvp from "@/components/rsvp"
import Outro from "@/components/outro"
import Header from "@/components/header"
import { PreviousAndNextBtn } from "@/components/previousAndNextBtn"

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
  phoneNumber: number | null
  diet: string | null
  comments: string | null
  eventId: string
  attending: boolean
  allergies: string | null
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
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    const storedGuestJSON = localStorage.getItem("guest")
    const storedGuest = storedGuestJSON ? JSON.parse(storedGuestJSON) : null

    if (storedGuest && !guest) {
      setGuest(storedGuest)
    }
    setLoading(false) // Set loading to false after fetching guest
  }, [guest, setGuest, setLoading])

  if (loading) {
    return <div>Loading...</div> // Show loading indicator while fetching guest
  }

  if (!guest) {
    return <LoginForm setGuest={setGuest} />
  }

  if (guest) {
    return (
      <>
        <Header></Header>
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
        {showTheProposal && <Proposal />}
        {showSaveTheDate && <SaveTheDate />}
        {showTheBigDay && <TheBigDay />}
        {showDressCode && <DressCode />}
        {showAdditionalInformation && <AdditionalInfo />}
        {showContacts && <Contacts />}
        {showRsvp && <Rsvp guest={guest} setGuest={setGuest} />}
        {showSeeYou && <Outro />}

        <article className="btns">
          <PreviousAndNextBtn
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
        </article>
      </>
    )
  }

  return null
}
