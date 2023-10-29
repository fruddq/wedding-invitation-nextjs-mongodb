// pages/login.js

import prisma from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import "../app/loginPage.scss";

const handleLogin = async (data: FormData) => {
  "use server";

  const password = data.get("password");
  const email = data.get("email") as string;

  const existingUser = await prisma.eventPlannerUser.findUnique({
    where: { email },
  });

  if (existingUser) {
    password === existingUser.password && redirect("/admin");
  }
};

export default function LoginPage() {
  return (
    <section className="wrapper">
      <h1 className="header">FIX HEADER SOMETHING HERE</h1>
      <article className="welcome-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus minima,
          vel autem, tempore, veniam saepe aliquid mollitia laboriosam officiis possimus
          quibusdam deleniti accusantium reiciendis itaque? Neque ex nemo possimus?
        </p>
      </article>
      <form action={handleLogin} className="login-form">
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <Link href="/register" className="register-user">
          Register
        </Link>
      </form>
      <article className="links">
        <Link href="/about">About</Link>
      </article>
    </section>
  );
}
