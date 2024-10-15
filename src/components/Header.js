// src/components/Header.js
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="H-lens AI Logo" className="w-12 h-12" />
        <nav>
          <Link href="/" className="text-lg font-semibold mr-6">
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
