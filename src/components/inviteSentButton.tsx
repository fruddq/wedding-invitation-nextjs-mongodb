"use client"

import { GuestInterface } from "@/app/invitation/[inviteCode]/page"
import updateInviteSent from "@/utils/updateInviteSent"
import { useState, useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import "./styles/inviteSentButton.scss"
export default function InviteSentButton({ guest }: { guest: GuestInterface }) {
  const [inviteSentStatus, setInviteSentStatus] = useState("No")
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setInviteSentStatus(guest.inviteSent ? "Yes" : "No")
  }, [guest.inviteSent, setInviteSentStatus])

  const handleInviteSentClick = async () => {
    setloading(true)
    const result = await updateInviteSent(guest)
    setInviteSentStatus(result ? "Yes" : "No")
    setloading(false)
  }
  return loading ? (
    <div className="loader-container">
      <PacmanLoader
        color="orange"
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <button className="invite-sent-button" onClick={handleInviteSentClick}>
      {inviteSentStatus}
    </button>
  )
}
