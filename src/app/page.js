// src/app/page.js

"use client" // This tells Next.js to treat this as a Client Component

import { useState } from "react"
import ChatInput from "../components/ChatInput"
import ChatResponse from "../components/ChatResponse"

export default function Home() {
  const [response, setResponse] = useState("") // Manage the state for the AI response

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">H-Lens AI Chatbot</h1>
      <ChatInput setResponse={setResponse} />
      <ChatResponse response={response} />
    </div>
  )
}
