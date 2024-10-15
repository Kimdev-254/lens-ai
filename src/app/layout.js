// src/app/layout.js
import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "H-lens AI",
  description:
    "Empowering Kenyans with knowledge of their rights and students with school regulations.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
