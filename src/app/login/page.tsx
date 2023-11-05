import prisma from "@/db";
import styles from "./page.module.css";
import Image from "next/image";
import "./style.scss";

// const fruddFn = async () => {
//   "use server"

//   const response = await prisma.guest.create({
//     data: {
//       firstName: "John5",
//       lastName: "Doe6",
//       diet: " testingss",
//     },
//   })

//   console.log(response)
// }

export default function Login() {
  return (
    <section className="container">
      <h1>
        Welcome to <br /> <span>Nani & Fruddis</span> <br />
        wedding reception
      </h1>
      <article className="info-text">
        <p>Please enter guest name and given password below for more wedding details.</p>
      </article>
      <article className="form-container">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="login-btn">Login</button>
        </form>
      </article>
    </section>
  );
}
