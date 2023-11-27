import { GuestInterface } from "@/app/invitation/[inviteCode]/page"
import "./styles/invitationMenu.scss"
import { useState } from "react"
type InvitationMenuProps = {
  showWelcomePage: boolean
  setShowWelcomePage: (value: boolean) => void
  showTheProposal: boolean
  setShowTheProposal: (value: boolean) => void
  showSaveTheDate: boolean
  setShowSaveTheDate: (value: boolean) => void
  showTheBigDay: boolean
  setShowTheBigDay: (value: boolean) => void
  showDressCode: boolean
  setShowDressCode: (value: boolean) => void
  showAdditionalInformation: boolean
  setShowAdditionalInformation: (value: boolean) => void
  showContacts: boolean
  setShowContacts: (value: boolean) => void
  showRsvp: boolean
  setShowRsvp: (value: boolean) => void
  showSeeYou: boolean
  setShowSeeYou: (value: boolean) => void
  setGuest: (value: GuestInterface | null) => void
}
export default function InvitationMenu({
  showWelcomePage,
  setShowWelcomePage,
  showTheProposal,
  setShowTheProposal,
  showSaveTheDate,
  setShowSaveTheDate,
  showTheBigDay,
  setShowTheBigDay,
  showDressCode,
  setShowDressCode,
  showAdditionalInformation,
  setShowAdditionalInformation,
  showContacts,
  setShowContacts,
  showRsvp,
  setShowRsvp,
  showSeeYou,
  setShowSeeYou,
  setGuest,
}: InvitationMenuProps) {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleWelcomePage = () => {
    !showWelcomePage && setShowWelcomePage(true)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }
  const handleProposal = () => {
    !showTheProposal && setShowTheProposal(true)
    showWelcomePage && setShowWelcomePage(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleSaveTheDate = () => {
    !showSaveTheDate && setShowSaveTheDate(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleTheBigDay = () => {
    !showTheBigDay && setShowTheBigDay(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleDressCode = () => {
    !showDressCode && setShowDressCode(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleAdditionalInfo = () => {
    !showAdditionalInformation && setShowAdditionalInformation(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleContacts = () => {
    !showContacts && setShowContacts(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showRsvp && setShowRsvp(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleRSVP = () => {
    !showRsvp && setShowRsvp(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showSeeYou && setShowSeeYou(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleSeeYou = () => {
    !showSeeYou && setShowSeeYou(true)
    showWelcomePage && setShowWelcomePage(false)
    showTheProposal && setShowTheProposal(false)
    showSaveTheDate && setShowSaveTheDate(false)
    showTheBigDay && setShowTheBigDay(false)
    showDressCode && setShowDressCode(false)
    showAdditionalInformation && setShowAdditionalInformation(false)
    showContacts && setShowContacts(false)
    showRsvp && setShowRsvp(false)
    setHamburgerMenuOpen(!isHamburgerMenuOpen)
  }

  const handleLogout = () => {
    localStorage.setItem("guest", JSON.stringify(null))
    setGuest(null)
  }

  return (
    <>
      <div
        className={`hamburger-menu ${isHamburgerMenuOpen ? "open" : ""}`}
        onClick={toggleHamburgerMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`menu ${isHamburgerMenuOpen ? "open" : ""}`}>
        <button
          onClick={handleWelcomePage}
          className={showWelcomePage ? "active" : ""}
        >
          Welcome page
        </button>
        <button
          onClick={handleProposal}
          className={showTheProposal ? "active" : ""}
        >
          THE PROPOSAL
        </button>
        <button
          onClick={handleSaveTheDate}
          className={showSaveTheDate ? "active" : ""}
        >
          Save The date
        </button>
        <button
          onClick={handleTheBigDay}
          className={showTheBigDay ? "active" : ""}
        >
          THE BIG DAY
        </button>
        <button
          onClick={handleDressCode}
          className={showDressCode ? "active" : ""}
        >
          Dress code
        </button>
        <button
          onClick={handleAdditionalInfo}
          className={showAdditionalInformation ? "active" : ""}
        >
          Additional information
        </button>
        <button
          onClick={handleContacts}
          className={showContacts ? "active" : ""}
        >
          Contacts
        </button>
        <button onClick={handleRSVP} className={showRsvp ? "active" : ""}>
          RSVP
        </button>
        <button onClick={handleSeeYou} className={showSeeYou ? "active" : ""}>
          See you
        </button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {isHamburgerMenuOpen && (
        <div className="overlay" onClick={toggleHamburgerMenu} />
      )}
    </>
  )
}
