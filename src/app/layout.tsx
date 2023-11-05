import Footer from "@/components/footer"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"

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
    // <>
    //   <Header />
    //   <div className={inter.className}>{children}</div>
    //   <Footer />
    // </>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
