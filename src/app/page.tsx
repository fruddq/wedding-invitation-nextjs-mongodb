// pages/login.js

import Link from "next/link"
import { redirect } from "next/navigation"

const handleLogin = async (data: FormData) => {
  "use server"

  const password = data.get("password")

  password === process.env.LOGIN_PASSWORD && redirect("/admin")
}

export default function LoginPage() {
  return (
    <div>
      <h1>Nani-Evite</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          minus minima, vel autem, tempore, veniam saepe aliquid mollitia
          laboriosam officiis possimus quibusdam deleniti accusantium reiciendis
          itaque? Neque ex nemo possimus?
        </p>
      </div>
      <form action={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <Link href="/register">Register</Link>
      <Link href="/about">About</Link>
    </div>
  )
}
