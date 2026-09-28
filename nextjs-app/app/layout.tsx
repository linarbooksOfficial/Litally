import type { Metadata, Viewport } from "next"
import { Cinzel, Montserrat, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { AmbientCanvas4K } from "@/components/AmbientCanvas4K"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: "Litally | Sovereign Literary Sanctuary 4K Ultra HD",
  description: "Официальная литературная вселенная, суверенная библиотека и святилище спекулятивной прозы. 4K Ultra HD Edition.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${cinzel.variable} ${montserrat.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#040507] text-[#f8f9fc] min-h-screen relative selection:bg-gold-400 selection:text-black`}
      >
        <AmbientCanvas4K />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
