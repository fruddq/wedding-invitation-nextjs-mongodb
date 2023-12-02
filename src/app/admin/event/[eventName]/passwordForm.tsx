import { Event } from "@/interface/interface"
import { updateEventProps } from "@/interface/props.ts/props"
import updateEventPassword from "@/utils/updateEventPassword"

export const PasswordFormComponent = ({
  event,
  setEvent,
  setLoading,
}: updateEventProps) => {
  const { id, password } = event

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(() => setLoading(true), 0)

    const data = new FormData(e.currentTarget)

    const newPassword = await updateEventPassword(data, id)

    if (newPassword) {
      setEvent({ ...event, password: newPassword })
      setLoading(false)
    }
  }

  return (
    <form className="event-settings-form" onSubmit={handleUpdatePassword}>
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" placeholder={password || ""} />
      </div>
      <button type="submit">Change Password</button>
    </form>
  )
}
