import { updateEventProps } from "@/interface/props.ts/props"
import inviteGuest from "@/utils/inviteGuest"
import { Event, GuestInterface } from "@/interface/interface"
import InviteSentButton from "@/components/inviteSentButton"
export const GuestsComponent = ({
  event,
  setEvent,
  setLoading,
}: updateEventProps) => {
  const { guestList } = event

  return (
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
  )
}
