import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/30 text-white p-6 border-b border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {/* Logo with hover animation */}
        <div className="transform transition-all duration-300 hover:scale-110 active:scale-95">
          <img
            src="/lenslogo.png"
            alt="H-lens AI Logo"
            className="w-14 h-14 hover:brightness-125 transition-all duration-300"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-8">
          <Link href="/" className="relative text-lg font-semibold group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-emerald-400">
              Home
            </span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          <Link href="/about" className="relative text-lg font-semibold group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-emerald-400">
              About
            </span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
