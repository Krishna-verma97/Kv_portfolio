import { retrieveContext } from "./retriever";
import { model } from "./gemini";
import { buildPrompt } from "./promptBuilder";
import { addConversation } from "./memory";

export async function getAIResponse(message) {
  try {
    // console.log("User:", message);

    const context = await retrieveContext(message);
    // console.log("Retrieved Context:", context);

    const prompt = buildPrompt(message, context);
    // console.log("Prompt:", prompt);
    // console.log("========== STEP 4 ==========");
// console.log("Calling Gemini...");

    const result = await model.generateContent(prompt);
    // console.log("Gemini call completed");

    const response = await result.response;

    // const reply = response.text();
    const reply = response.text().trim();

    // console.log("Gemini Response:", reply);

    // addConversation(message, reply);
    addConversation("user", message);
addConversation("assistant", reply);

    return {
      reply,
      context,
    };
  } catch (error) {
  console.error("================================");
  console.error("GEMINI ERROR");
  console.error(error);

  if (error instanceof Error) {
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
  }

  console.error("================================");

  return {
    reply: "Sorry, something went wrong while generating the response.",
    context: [],
  };
}
}