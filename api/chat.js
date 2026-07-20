import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
//   model: "gemini-3.5-flash",
  model: "gemini-3.1-flash-lite",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return res.status(200).json({
      reply: response.text().trim(),
    });
  } catch (error) {
  console.error(error);

  if (error.status === 429) {
    return res.status(429).json({
      error: "AI quota exceeded. Please try again later.",
    });
  }

  return res.status(500).json({
    error: error.message || "Failed to generate response",
  });
}
}