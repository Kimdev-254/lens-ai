import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold text-gray-800">H-Lens AI</h1>
        <p className="text-lg mt-4 text-gray-600">
          Empowering Kenyan Citizens and Students
        </p>
      </motion.div>

      {/* Input field for user to type query */}
      <motion.div
        className="mt-10 w-full max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <input
          type="text"
          placeholder="Ask H-Lens AI about your rights..."
          className="w-full p-4 text-xl rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </motion.div>

      {/* Logo (Placeholder for now) */}
      <motion.div
        className="absolute top-5 right-5"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
      >
        <img src="/logo.png" alt="H-Lens AI Logo" className="w-16 h-16" />
      </motion.div>
    </div>
  )
}
