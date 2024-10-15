// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} H-lens AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
