import prisma from "@/db"
import { redirect } from "next/navigation"

const handleRegister = async (data: FormData) => {
  "use server"
  const email = data.get("email") as string
  const password = data.get("password") as string

  const existingUser = await prisma.eventPlannerUser.findUnique({
    where: { email },
  })

  if (existingUser) {
    // Handle the case where the email already exists
    console.log("Email already exists")
    return
  }

  const response = await prisma.eventPlannerUser.create({
    data: {
      email,
      password,
    },
  })

  console.log(response)
  redirect("/")
}

export default function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <form action={handleRegister}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}
