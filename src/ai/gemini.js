import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
// console.log("Gemini API Key:", apiKey);
// console.log("Gemini module loaded");
// console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY);

if (!apiKey) {
  throw new Error("Missing VITE_GEMINI_API_KEY");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",
  model: "gemini-3.5-flash",
});