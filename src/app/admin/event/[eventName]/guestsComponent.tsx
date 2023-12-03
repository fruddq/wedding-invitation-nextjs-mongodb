import { updateEventProps } from "@/interface/props.ts/props"
import { Event, GuestInterface } from "@/interface/interface"
import InviteSentButton from "@/components/inviteSentButton"
import { useState } from "react"
import adminUpdateGuest from "@/utils/adminUpdateGuest"
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

  const handleSaveClick = async (
    e: React.FormEvent<HTMLFormElement>,
    guestId: string
  ) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const inviteSent = formData.get("invite-sent") as string
    const email = formData.get("email") as string
    const phoneNumber = formData.get("phone-number") as string
    const attending = formData.get("attending") as string
    const hasResponded = formData.get("has-responded") as string
    const guestDiet = formData.get("guest-diet") as string
    const guestAllergies = formData.get("guest-allergies") as string
    const guestComments = formData.get("guest-comments") as string

    const additionalGuestName = formData.get("additional-guest-name") as string
    const additionalGuestAttending = formData.get(
      "additional-guest-attending"
    ) as string

    const additionalGuestDiet = formData.get("additional-guest-diet") as string
    const additionalGuestAllergies = formData.get(
      "additional-guest-allergies"
    ) as string
    const additionalGuestComments = formData.get(
      "additional-guest-comments"
    ) as string

    setLoading(true)
    const updatedGuest = await adminUpdateGuest({
      id: guestId,
      inviteSent,
      email,
      phoneNumber,
      attending,
      hasResponded,
      diet: guestDiet,
      allergies: guestAllergies,
      comments: guestComments,
      additionalGuestName,
      additionalGuestAttending,
      additionalGuestDiet,
      additionalGuestAllergies,
      additionalGuestComments,
    })

    if (updatedGuest) {
      setEvent(
        (prevEvent) =>
          ({
            ...prevEvent,
            guestList: prevEvent.guestList.map((guest) =>
              guest.id === updatedGuest.id ? updatedGuest : guest
            ),
          } as Event)
      )
      setLoading(false)
    }
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
              <form onSubmit={(e) => handleSaveClick(e, guest.id)}>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                  Cancel
                </button>

                <p className="guest-info-item guest-info-name">
                  <span className="guest-info-label">Name: </span>
                  {guest.firstName} {guest.lastName}
                </p>

                <hr />
                {/* @ TODO fix class names */}
                <p className="guest-info-item guest-info-name">
                  <span className="guest-info-label">Invite sent:</span>{" "}
                  <select
                    name="invite-sent"
                    defaultValue={guest.inviteSent.toString()}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
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

                <p className="guest-info-item guest-info-diet">
                  <span className="guest-info-label">Diet:</span>
                  <input
                    type="text"
                    defaultValue={guest.diet || "N/A"}
                    name="guest-diet"
                  />
                </p>
                <hr />

                <p className="guest-info-item guest-info-allergies">
                  <span className="guest-info-label">Allergies: </span>
                  <input
                    type="text"
                    defaultValue={guest.allergies || "N/A"}
                    name="guest-allergies"
                  />
                </p>
                <hr />

                <p className="guest-info-item guest-info-comments">
                  <span className="guest-info-label">Comments:</span>
                  <input
                    type="text"
                    defaultValue={guest.comments || "N/A"}
                    name="guest-comments"
                  />
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
                          <span className="detail-label">Name: </span>{" "}
                          <input
                            type="text"
                            name="additional-guest-name"
                            defaultValue={
                              guest.additionalGuests[0].firstName +
                                " " +
                                guest.additionalGuests[0].lastName || "N/A"
                            }
                          />
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Attending:</span>
                          <select
                            name="additional-guest-attending"
                            defaultValue={guest.additionalGuests[0].attending.toString()}
                          >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                          </select>
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Diet: </span>
                          <input
                            type="text"
                            name="additional-guest-diet"
                            defaultValue={
                              guest.additionalGuests[0].diet || "N/A"
                            }
                          />
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Allergies: </span>
                          <input
                            type="text"
                            name="additional-guest-allergies"
                            defaultValue={
                              guest.additionalGuests[0].allergies || "N/A"
                            }
                          />
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Comments: </span>
                          <input
                            type="text"
                            name="additional-guest-comments"
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
                  <span className="guest-info-label">Name:</span>{" "}
                  {guest.firstName} {guest.lastName}
                </p>
                <hr />

                <p className="guest-info-item guest-info-invite-sent">
                  <span className="guest-info-label">Invite sent:</span>{" "}
                  {guest.inviteSent ? "Yes" : "No"}
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

                <p className="guest-info-item guest-info-diet">
                  <span className="guest-info-label">Diet:</span>{" "}
                  {guest.diet || "N/A"}
                </p>
                <hr />

                <p className="guest-info-item guest-info-allergies">
                  <span className="guest-info-label">Allergies: </span>{" "}
                  {guest.allergies || "N/A"}
                </p>
                <hr />

                <p className="guest-info-item guest-info-comments">
                  <span className="guest-info-label">Comments:</span>{" "}
                  {guest.comments || "N/A"}
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
                          <span className="detail-label">Attending: </span>
                          {guest.additionalGuests[0].attending ? "Yes" : "No"}
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Diet: </span>
                          {guest.additionalGuests[0].diet || "N/A"}
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Allergies: </span>
                          {guest.additionalGuests[0].allergies || "N/A"}
                        </li>

                        <li className="additional-guest-detail-item">
                          <span className="detail-label">Comments: </span>
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
