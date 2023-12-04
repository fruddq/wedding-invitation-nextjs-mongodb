import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=1000" />
        <link rel="icon" type="image/svg+xml" href="/rings.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
