// src/components/ChatResponse.js
export default function ChatResponse({ response }) {
  return (
    <div className="w-full max-w-lg mx-auto mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
      <strong>AI Response:</strong>
      <p className="mt-2 text-gray-800">{response}</p>
    </div>
  )
}
