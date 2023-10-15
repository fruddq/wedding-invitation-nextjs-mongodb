// pages/login.js

import { redirect } from "next/navigation"

const handleLogin = async (data: FormData) => {
  "use server"

  const password = data.get("password")
  console.log(password)

  console.log("Secret passowrd", process.env.LOGIN_PASSWORD)

  if (password === process.env.LOGIN_PASSWORD) {
    redirect("/info")
  }
}

export default function LoginPage() {
  return (
    <div>
      <h1>Frudd and Nanis Wedding invitation</h1>
      <form action={handleLogin}>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
