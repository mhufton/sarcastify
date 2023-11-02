import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { sarcastify } from "./util/sarcastify"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaRcAsTiFy",
  description: "A sArCaStIc TeXt GeNeRaToR",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SaRcAsTiFy</title>
        <meta name="Sarcastify" content="A sarcastic text generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8508403078221807"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${inter.className} px-5 pt-10 lg:p-20 min-h-screen flex flex-col`}
      >
        <main className="flex flex-col justify-start items-center flex-1">
          <a href="/" className="text-4xl lg:text-8xl">
            {sarcastify("sarcastify")}
          </a>
          <p className="text-xl lg:text-2xl pt-5">
            {sarcastify("a sarcastic text generator")}
          </p>
          {children}
        </main>

        <Analytics />

        <footer className="flex justify-center mb-5">
          <a href={"/privacy"} className="text-center">
            Privacy Policy
          </a>
        </footer>
      </body>
    </html>
  )
}
