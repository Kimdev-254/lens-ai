// src/pages/api/chat.js
import axios from "axios"

export default async function handler(req, res) {
  const { prompt } = req.body

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/kenyan-legal-rights",
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer YOUR_HUGGING_FACE_API_KEY`,
        },
      }
    )

    const generatedText = response.data.generated_text
    res.status(200).json({ response: generatedText })
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." })
  }
}
