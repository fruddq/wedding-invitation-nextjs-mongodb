import { updateEventProps } from "@/interface/props.ts/props"
import { Event, GuestInterface } from "@/interface/interface"
import InviteSentButton from "@/components/inviteSentButton"
import { useState } from "react"
export const GuestsComponent = ({
  event,
  setEvent,
  setLoading,
}: updateEventProps) => {
  const { guestList } = event

  const [editModeId, setEditModeId] = useState<string | null>(null)

  const handleEditClick = (guestId: string) => {
    setEditModeId(guestId)
  }

  const handleSaveClick = () => {
    setEditModeId(null)
  }

  const handleCancelClick = () => {
    setEditModeId(null)
  }

  return (
    <div className="guestlist-container">
      <h2 className="guestlist-header">
        Number of invited Guests: {guestList.length}
      </h2>

      {guestList.map((guest: GuestInterface) => (
        <div key={guest.id} className="guest-container">
          <div className="guest-info">
            {editModeId === guest.id ? (
              <>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEditClick(guest.id)}>Edit</button>
              </>
            )}

            <hr />

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
              <span className="guest-info-label">Email:</span>
              {editModeId === guest.id ? (
                <input type="text" defaultValue={guest.email || "N/A"} />
              ) : (
                guest.email || "N/A"
              )}
            </p>
            <hr />

            <p className="guest-info-item guest-info-phone">
              <span className="guest-info-label">Phone Number:</span>
              {editModeId === guest.id ? (
                <input type="text" defaultValue={guest.phoneNumber || "N/A"} />
              ) : (
                guest.phoneNumber || "N/A"
              )}
            </p>
            <hr />

            <p className="guest-info-item guest-info-diet">
              <span className="guest-info-label">Diet:</span>
              {editModeId === guest.id ? (
                <input type="text" defaultValue={guest.diet || "N/A"} />
              ) : (
                guest.diet || "N/A"
              )}
            </p>
            <hr />

            <p className="guest-info-item guest-info-comments">
              <span className="guest-info-label">Comments:</span>
              {editModeId === guest.id ? (
                <input type="text" defaultValue={guest.comments || "N/A"} />
              ) : (
                guest.comments || "N/A"
              )}
            </p>
            <hr />
            <p className="guest-attendance-status">
              <span className="attendance-label">Attending:</span>

              {editModeId === guest.id ? (
                <select>
                  <option value="true" selected={guest.attending}>
                    Yes
                  </option>
                  <option value="false" selected={!guest.attending}>
                    No
                  </option>
                </select>
              ) : guest.attending ? (
                "Yes"
              ) : (
                "No"
              )}
            </p>
            <hr />

            <p className="guest-response-status">
              <span className="response-label">Has Responded:</span>
              {editModeId === guest.id ? (
                <select>
                  <option value="true" selected={guest.hasResponded}>
                    Yes
                  </option>
                  <option value="false" selected={!guest.hasResponded}>
                    No
                  </option>
                </select>
              ) : guest.hasResponded ? (
                "Yes"
              ) : (
                "No"
              )}
            </p>
            <hr />

            <p className="guest-invite-action">
              <span className="invite-label">Invite Sent:</span>
              {editModeId === guest.id ? (
                <select>
                  <option value="true" selected={guest.inviteSent}>
                    Yes
                  </option>
                  <option value="false" selected={!guest.inviteSent}>
                    No
                  </option>
                </select>
              ) : guest.inviteSent ? (
                "Yes"
              ) : (
                "No"
              )}
            </p>
          </div>

          {guest.additionalGuests[0].firstName.length > 0 && (
            <div className="additional-guests-container">
              <hr />
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
                      {editModeId === guest.id ? (
                        <input
                          type="text"
                          defaultValue={additionalGuest.diet || "N/A"}
                        />
                      ) : (
                        additionalGuest.diet || "N/A"
                      )}
                    </li>
                    <li className="additional-guest-detail-item">
                      <span className="detail-label">Comment:</span>{" "}
                      {editModeId === guest.id ? (
                        <input
                          type="text"
                          defaultValue={additionalGuest.comments || "N/A"}
                        />
                      ) : (
                        additionalGuest.comments || "N/A"
                      )}
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
