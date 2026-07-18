export async function getAIResponse(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `👋 Hello!

You asked:

"${message}"

Version 2 will replace this response with Gemini.

Your custom AI architecture is now ready.`
      );
    }, 1000);
  });
}