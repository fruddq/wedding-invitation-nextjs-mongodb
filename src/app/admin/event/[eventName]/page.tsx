import { GuestInterface } from "@/app/invitation/[inviteCode]/page"
import InviteSentButton from "@/components/inviteSentButton"
import prisma from "@/db"
import getEvent from "@/utils/getEvent"

export default async function Event({
  params: { eventName },
}: {
  readonly params: { readonly eventName: string }
}) {
  // Nextjs har en bugg som visar fel param( I detta fall filer, söker efter filer med ".")
  if (eventName.includes(".")) {
    return null
  }

  const event = await getEvent(eventName)

  if (event) {
    const {
      guestlist,
      RSVPDate,
      id,
      eventName,
      eventDate,
      password,
      inviteLink,
    } = event

    // await prisma.event.update({
    //   where: {
    //     id,
    //   },
    //   data: {
    //     inviteLink: "NaniFruddWedding2024",
    //   },
    // })
    return (
      <div>
        <h1>Event: {eventName}</h1>

        <p>Event Date: {eventDate.toLocaleDateString()}</p>
        <p>RSVP Date: {RSVPDate?.toLocaleDateString() || "N/A"}</p>
        <p>Invite Link: {inviteLink}</p>

        <form
          action={async (data: FormData) => {
            "use server"

            const password = data.get("password") as string

            await prisma.event.update({
              where: {
                id,
              },
              data: {
                password,
              },
            })
          }}
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" placeholder={password || ""} />
          </div>
          <button type="submit">Change Password</button>
        </form>

        <br />

        <form
          action={async (data: FormData) => {
            "use server"

            const date = data.get("rsvp-date") as string
            const RSVPDate = new Date(date)

            await prisma.event.update({
              where: {
                id,
              },
              data: {
                RSVPDate,
              },
            })
          }}
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="rsvp-date">RSVP Date: </label>
            <input type="date" id="rsvp-date" name="rsvp-date" />
          </div>
          <button type="submit">Change RSVP Date</button>
        </form>

        <br />

        <form
          action={async (data: FormData) => {
            "use server"
            const firstName = data.get("first-name") as string
            const lastName = data.get("last-name") as string
            const additionalGuestFirstName = data.get(
              "additional-guest-first-name"
            ) as string
            const additionalGuestLastName = data.get(
              "additional-guest-last-name"
            ) as string

            const additionalGuests = {
              firstName: additionalGuestFirstName,
              lastName: additionalGuestLastName,
            }

            await prisma.event.update({
              where: { id }, // Replace with the actual ID of the event you want to update
              data: {
                guestlist: {
                  create: [
                    {
                      firstName,
                      lastName,
                      additionalGuests,
                    },
                  ],
                },
              },
            })
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
        </form>

        <br />

        <div
          style={{
            fontFamily: "Arial, sans-serif",
            margin: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h2>Number of invited Guests: {guestlist.length}</h2>

          {guestlist.map((guest: GuestInterface, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p style={{ fontWeight: "bold", margin: 0 }}>
                First Name: {guest.firstName}
              </p>
              <hr style={{ borderTop: "1px solid #ddd", margin: "5px 0" }} />{" "}
              {/* Add line after First Name */}
              <p style={{ margin: 0 }}>Last Name: {guest.lastName}</p>
              <hr
                style={{ borderTop: "1px solid #ddd", margin: "5px 0" }}
              />{" "}
              {/* Add line after Last Name */}
              <p style={{ margin: 0 }}>Email: {guest.email || "N/A"}</p>
              <hr
                style={{ borderTop: "1px solid #ddd", margin: "5px 0" }}
              />{" "}
              {/* Add line after Email */}
              <p style={{ margin: 0 }}>
                Phone Number: {guest.phoneNumber || "N/A"}
              </p>
              <hr style={{ borderTop: "1px solid #ddd", margin: "5px 0" }} />{" "}
              {/* Add line after Phone Number */}
              <p style={{ margin: 0 }}>Diet: {guest.diet || "N/A"}</p>
              <hr
                style={{ borderTop: "1px solid #ddd", margin: "5px 0" }}
              />{" "}
              {/* Add line after Diet */}
              <p style={{ margin: 0 }}>Comments: {guest.comments || "N/A"}</p>
              <hr
                style={{ borderTop: "1px solid #ddd", margin: "5px 0" }}
              />{" "}
              <hr style={{ borderTop: "1px solid #ddd", margin: "5px 0" }} />{" "}
              {/* Add line after Additional Guests */}
              <p style={{ margin: 0 }}>
                Attending: {guest.attending ? "Yes" : "No"}
              </p>
              <hr style={{ borderTop: "1px solid #ddd", margin: "5px 0" }} />{" "}
              {/* Add line after Attending */}
              <p style={{ margin: 0 }}>
                Has Responded: {guest.hasResponded ? "Yes" : "No"}
              </p>
              <hr style={{ borderTop: "1px solid #ddd", margin: "5px 0" }} />{" "}
              Invite Sent: <InviteSentButton guest={guest} />
              {guest.additionalGuests.length > 0 && (
                <div>
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Additional Guests:
                  </p>
                  {guest.additionalGuests.map((additionalGuest, index) => (
                    <ul key={index}>
                      <li>First Name: {additionalGuest.firstName}</li>
                      <li>Last Name: {additionalGuest.lastName}</li>
                      <li>Diet: {additionalGuest.diet || "N/A"}</li>
                      <li>Comment: {additionalGuest.comments || "N/A"}</li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
