import Footer from "@/components/footer"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Image from "next/image"
import headerImage from "../../public/header1.svg"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wedding invitation",
  description: "Invitation to Frudd & Nanis wedding",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
