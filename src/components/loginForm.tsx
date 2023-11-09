import prisma from "@/db"
import checkGuestCredentials from "@/utils/checkGuestCredentials"
import getEventFromInviteLink from "@/utils/getEventFromInviteLink"

interface LoginFormProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface Guest {
  firstName: string
  lastName: string
  password: string
}

const checkGuest = async ({ firstName, lastName, password }: Guest) => {
  console.log(firstName, lastName, password)
  await getEventFromInviteLink()

  //   const event = await prisma.event.findFirst({
  //     where: {
  //         eventName,
  //         eventPlannerUserId: userId, // Optionally filter by eventPlannerUserId if needed
  //     },
  //     include: { guestlist: true },
  // })
}

export const LoginForm: React.FC<LoginFormProps> = ({ setIsLoggedIn }) => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const password = formData.get("password") as string // Add this line

    const test = await checkGuestCredentials({ firstName, lastName, password })

    console.log(test)
    setIsLoggedIn(true)
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
            <input type="text" name="firstName" placeholder="Your first name" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" placeholder="Your last name" />
          </div>
          <div>
            {" "}
            {/* Add this div */}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
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
