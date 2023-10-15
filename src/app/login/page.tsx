import prisma from "@/db"
import styles from "./page.module.css"

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

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
