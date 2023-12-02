"use client"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page"
import InviteSentButton from "@/components/inviteSentButton"
import getEvent from "@/utils/getEvent"
import inviteGuest from "@/utils/inviteGuest"
import updateEventPassword from "@/utils/updateEventPassword"
import updateRsvpDate from "@/utils/updateRsvpDate"
import "./style.scss"
import { useState } from "react"
import { PasswordFormComponent } from "./passwordForm"
import PacmanLoader from "react-spinners/PacmanLoader"
import { Event } from "@/interface/interface"
import { InviteGuestForm } from "./inviteGuestForm"

interface EventComponentProps {
  event: Event
}
export default function EventComponent({
  event: eventDB,
}: EventComponentProps) {
  const [event, setEvent] = useState<Event>(eventDB)
  const [loading, setLoading] = useState(false)

  const {
    guestList,
    RSVPDate,
    id,
    eventName,
    eventDate,
    password,
    inviteLink,
  } = event

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <PacmanLoader
            color="orange"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

      <h1 className="event-name"> {eventName}</h1>
      <div className="event-settings">
        <div className="event-info">
          {/* <p>Event Date: {eventDate.toLocaleDateString()}</p>
          <p>RSVP Date: {RSVPDate?.toLocaleDateString() || "N/A"}</p> */}
          <p>Invite Link: {inviteLink}</p>
        </div>

        <PasswordFormComponent
          event={event}
          setEvent={setEvent}
          setLoading={setLoading}
        />
        <br />

        {/* <form
          action={async (data: FormData) => {
            "use server"
            await updateRsvpDate(data, id)
          }}
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="rsvp-date">RSVP Date: </label>
            <input type="date" id="rsvp-date" name="rsvp-date" />
          </div>
          <button type="submit">Change RSVP Date</button>
        </form> */}

        <InviteGuestForm
          event={event}
          setEvent={setEvent}
          setLoading={setLoading}
        />
        {/* <form
          action={async (data: FormData) => {
            "use server"
            await inviteGuest(data, id)
          }}
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="first-name">First Name: </label>
            <input id="first-name" name="first-name" />
          </div>

          <div className="form-field">
            <label htmlFor="last-name">Last Name: </label>
            <input id="last-name" name="last-name" />
          </div>

          <div className="form-field">
            <label htmlFor="additional-guest-first-name">
              Additional Guest First name:
            </label>
            <input
              id="additional-guest-first-name"
              name="additional-guest-first-name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="additional-guest-last-name">
              Additional Guest Last name:
            </label>
            <input
              id="additional-guest-last-name"
              name="additional-guest-last-name"
            />
          </div>

          <button type="submit">Invite guest</button>
        </form> */}
      </div>

      <div className="guestlist-container">
        <h2 className="guestlist-header">
          Number of invited Guests: {guestList.length}
        </h2>

        {guestList.map((guest: GuestInterface, index) => (
          <div key={index} className="guest-container">
            <div className="guest-info">
              <p className="guest-info-item guest-info-name">
                <span className="guest-info-label">First Name:</span>{" "}
                {guest.firstName}
              </p>
              <hr />
              <p className="guest-info-item guest-info-lastname">
                <span className="guest-info-label">Last Name:</span>{" "}
                {guest.lastName}
              </p>
              <hr />
              <p className="guest-info-item guest-info-email">
                <span className="guest-info-label">Email:</span>{" "}
                {guest.email || "N/A"}
              </p>
              <hr />
              <p className="guest-info-item guest-info-phone">
                <span className="guest-info-label">Phone Number:</span>{" "}
                {guest.phoneNumber || "N/A"}
              </p>
              <hr />
              <p className="guest-info-item guest-info-diet">
                <span className="guest-info-label">Diet:</span>{" "}
                {guest.diet || "N/A"}
              </p>
              <hr />
              <p className="guest-info-item guest-info-comments">
                <span className="guest-info-label">Comments:</span>{" "}
                {guest.comments || "N/A"}
              </p>
              <hr />
            </div>

            <p className="guest-attendance-status">
              <span className="attendance-label">Attending:</span>{" "}
              {guest.attending ? "Yes" : "No"}
            </p>
            <hr />
            <p className="guest-response-status">
              <span className="response-label">Has Responded:</span>{" "}
              {guest.hasResponded ? "Yes" : "No"}
            </p>
            <hr />
            <div className="guest-invite-action">
              <span className="invite-label">Invite Sent:</span>{" "}
              <InviteSentButton guest={guest} />
            </div>

            {guest.additionalGuests.length > 0 && (
              <div className="additional-guests-container">
                <p className="additional-guests-header">Additional Guests:</p>
                {guest.additionalGuests.map((additionalGuest, index) => (
                  <div key={index} className="additional-guest">
                    <ul className="additional-guest-details">
                      <li className="additional-guest-detail-item">
                        <span className="detail-label">First Name:</span>{" "}
                        {additionalGuest.firstName}
                      </li>
                      <li className="additional-guest-detail-item">
                        <span className="detail-label">Last Name:</span>{" "}
                        {additionalGuest.lastName}
                      </li>
                      <li className="additional-guest-detail-item">
                        <span className="detail-label">Diet:</span>{" "}
                        {additionalGuest.diet || "N/A"}
                      </li>
                      <li className="additional-guest-detail-item">
                        <span className="detail-label">Comment:</span>{" "}
                        {additionalGuest.comments || "N/A"}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
