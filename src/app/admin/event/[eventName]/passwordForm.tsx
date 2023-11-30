import updateEventPassword from "@/utils/updateEventPassword"
import { Event } from "./page"

interface passwordFormProps {
  event: Event
  setEvent: React.Dispatch<React.SetStateAction<Event>>
}
export const PasswordFormComponent = ({
  event,
  setEvent,
}: passwordFormProps) => {
  const { id, password } = event
  return (
    <form
      className="password-form"
      action={async (data: FormData) => {
        const newPassword = await updateEventPassword(data, id)
        if (newPassword) {
          setEvent({ ...event, password: newPassword })
        }
      }}
    >
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" placeholder={password || ""} />
      </div>
      <button type="submit">Change Password</button>
    </form>
  )
}
