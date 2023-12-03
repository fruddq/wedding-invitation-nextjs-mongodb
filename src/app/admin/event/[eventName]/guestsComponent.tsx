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
    console.log("edit", guestId)
    setEditModeId(guestId)
  }

  const handleSaveClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const attending = formData.get("attending")
    const phoneNumber = formData.get("phone-number")
    const hasResponded = formData.get("has-responded")

    console.log(email, "email")
    console.log(phoneNumber, "phoneNumber")
    console.log(attending, "attending")
    console.log(hasResponded, "hasResponded")

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
              <form onSubmit={handleSaveClick}>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                  Cancel
                </button>

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
                  <span className="guest-info-label">Email: </span>{" "}
                  <input
                    type="text"
                    name="email"
                    defaultValue={guest.email || "N/A"}
                  />
                </p>

                <hr />

                <p className="guest-info-item guest-info-phone">
                  <span className="guest-info-label">Phone Number:</span>
                  <input
                    type="text"
                    name="phone-number"
                    defaultValue={guest.phoneNumber || "N/A"}
                  />
                </p>
                <hr />

                <p className="guest-attendance-status">
                  <span className="attendance-label">Attending:</span>
                  <select
                    name="attending"
                    defaultValue={guest.attending.toString()}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </p>

                <hr />

                <p className="guest-response-status">
                  <span className="response-label">Has Responded:</span>

                  <select
                    name="has-responded"
                    defaultValue={guest.hasResponded.toString()}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </p>
                <hr />

                {guest.additionalGuests[0].firstName.length > 0 && (
                  <div className="additional-guests-container">
                    <p className="additional-guests-header">
                      Additional Guests:
                    </p>
                    <div className="additional-guest">
                      <ul className="additional-guest-details">
                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Name: </span>
                          {guest.additionalGuests[0].firstName}{" "}
                          {guest.additionalGuests[0].lastName}
                        </li>
                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Diet: </span>
                          <input
                            type="text"
                            defaultValue={
                              guest.additionalGuests[0].diet || "N/A"
                            }
                          />
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Comment: </span>
                          <input
                            type="text"
                            defaultValue={
                              guest.additionalGuests[0].comments || "N/A"
                            }
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <>
                <button onClick={() => handleEditClick(guest.id)}>Edit</button>

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
                  {guest.email || "N/A"}
                </p>

                <hr />

                <p className="guest-info-item guest-info-phone">
                  <span className="guest-info-label">Phone Number:</span>
                  {guest.phoneNumber || "N/A"}
                </p>
                <hr />

                <p className="guest-attendance-status">
                  <span className="attendance-label">Attending:</span>
                  {guest.attending ? "Yes" : "No"}
                </p>
                <hr />

                <p className="guest-response-status">
                  <span className="response-label">Has Responded:</span>
                  {guest.hasResponded ? "Yes" : "No"}
                </p>
                <hr />

                {guest.additionalGuests[0].firstName.length > 0 && (
                  <div className="additional-guests-container">
                    <p className="additional-guests-header">
                      Additional Guests:
                    </p>
                    <div className="additional-guest">
                      <ul className="additional-guest-details">
                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Name: </span>
                          {guest.additionalGuests[0].firstName}{" "}
                          {guest.additionalGuests[0].lastName}
                        </li>
                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Diet: </span>
                          {guest.additionalGuests[0].diet || "N/A"}
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Comment: </span>
                          {guest.additionalGuests[0].comments || "N/A"}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
