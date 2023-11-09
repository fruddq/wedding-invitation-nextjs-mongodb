import { GuestInterface } from "@/app/invitation/[inviteCode]/page"
import checkGuestCredentials from "@/utils/checkGuestCredentials"

interface LoginFormProps {
  setGuest: (guest: GuestInterface | null) => void
}
export const LoginForm: React.FC<LoginFormProps> = ({ setGuest }) => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const password = formData.get("password") as string // Add this line

    const guest = await checkGuestCredentials({ firstName, lastName, password })

    if (guest) {
      setGuest(guest)
    }
  }

  return (
    <section className="container">
      <h1>
        Welcome to <br /> <span>Nani & Fruddis</span> <br />
        wedding reception
      </h1>
      <article className="info-text">
        <p>
          Please enter your first name, last name, and password below for more
          wedding details.
        </p>
      </article>
      <article className="form-container">
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              defaultValue="Jens"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Your last name"
              defaultValue="Persson"
            />
          </div>
          <div>
            {" "}
            {/* Add this div */}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              defaultValue="NaniFruddIDo2024!"
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </article>
    </section>
  )
}

export default LoginForm
