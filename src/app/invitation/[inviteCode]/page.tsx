"use client"
import { useState } from "react"
import LoginForm from "@/components/loginForm"

export default function Invitation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn && <p>You are logged in!</p>}
    </>
  )
}
