import { updateEventProps } from "@/interface/props.ts/props"
import inviteGuest from "@/utils/inviteGuest"
import "./style.scss"
export const InviteGuestForm = ({
  event,
  setEvent,
  setLoading,
}: updateEventProps) => {
  const { id } = event

  const handleInviteGuest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // setTimeout(() => setLoading(true), 0)

    const data = new FormData(e.currentTarget)
    const newGuest = {
      firstName: data.get("first-name") as string,
      lastName: data.get("last-name") as string,
      additionalGuests: {
        firstName: data.get("additional-guest-first-name") as string,
        lastName: data.get("additional-guest-last-name") as string,
      },
    }

    // await inviteGuest(data, id)
    // event.guestlist.push()
    console.log(event.guestList[0], "Guest 0")
    // setLoading(false)
  }

  return (
    <form onSubmit={handleInviteGuest} className="event-settings-form">
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
  )
}
