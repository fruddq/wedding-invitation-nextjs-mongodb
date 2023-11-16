import "./styles/previousAndNextBtn.scss"

type PreviousAndNextBtnProps = {
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
}
export const PreviousAndNextBtn = ({
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
}: PreviousAndNextBtnProps) => {
  const handlePrevious = () => {
    showSeeYou && (setShowSeeYou(false), setShowRsvp(true))
    showRsvp && (setShowRsvp(false), setShowContacts(true))
    showContacts && (setShowContacts(false), setShowAdditionalInformation(true))
    showAdditionalInformation &&
      (setShowAdditionalInformation(false), setShowDressCode(true))
    showDressCode && (setShowDressCode(false), setShowTheBigDay(true))
    showTheBigDay && (setShowTheBigDay(false), setShowSaveTheDate(true))
    showSaveTheDate && (setShowSaveTheDate(false), setShowTheProposal(true))
    showTheProposal && (setShowTheProposal(false), setShowWelcomePage(true))
  }

  const handleNext = () => {
    showWelcomePage && (setShowWelcomePage(false), setShowTheProposal(true))
    showTheProposal && (setShowTheProposal(false), setShowSaveTheDate(true))
    showSaveTheDate && (setShowSaveTheDate(false), setShowTheBigDay(true))
    showTheBigDay && (setShowTheBigDay(false), setShowDressCode(true))
    showDressCode &&
      (setShowDressCode(false), setShowAdditionalInformation(true))
    showAdditionalInformation &&
      (setShowAdditionalInformation(false), setShowContacts(true))
    showContacts && (setShowContacts(false), setShowRsvp(true))
    showRsvp && (setShowRsvp(false), setShowSeeYou(true))
  }

  return (
    <div className="wrapper-btns">
      <button
        className="previous-btn"
        onClick={handlePrevious}
        disabled={showWelcomePage}
      >
        &larr;
      </button>

      <button className="next-btn" onClick={handleNext} disabled={showSeeYou}>
        &rarr;
      </button>
    </div>
  )
}
