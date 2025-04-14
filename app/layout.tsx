import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import Navbar from "@/components/nav-bar"
import ModalProvider from "@/providers/modal-provider"
import ToastProvider from "@/providers/toast-provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Store",
  description: "store",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <div className="grow">
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
        </div>
        <div className="flex justify-around mt-10 h-[72px] items-center ">
          <Footer />
        </div>
      </body>
    </html>
  )
}
