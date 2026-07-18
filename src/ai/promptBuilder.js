import { SYSTEM_PROMPT } from "./systemPrompt";
import { getConversationHistory } from "./memory";

function formatDocument(doc) {
  return `
==================================================
TITLE
${doc.title}

SOURCE
${doc.source}

CATEGORY
${doc.category ?? "N/A"}

DESCRIPTION
${doc.description ?? "No description"}

CONTENT
${doc.content ?? "No content"}
`;
}

export function buildPrompt(userMessage, context) {
  const history = getConversationHistory();

  const conversation = history
  .map(
    ({ role, content }) => `
${role === "user" ? "User" : "Assistant"}:
${content}
`
  )
  .join("\n");

  const documents = context
    .map(formatDocument)
    .join("\n");

  return `
${SYSTEM_PROMPT}

==================================================
USER QUESTION
==================================================

${userMessage}

==================================================
PREVIOUS CONVERSATION
==================================================

${conversation}

==================================================
RELEVANT KNOWLEDGE
==================================================

${documents}

==================================================
INSTRUCTIONS
==================================================

Answer ONLY using the information above.

If the answer is not present in the provided knowledge, reply exactly:

"I couldn't find that information in Krishna's Engineering Platform."

Never invent:

- projects
- experience
- certifications
- technologies
- timelines

If relevant, recommend another project, article, or knowledge page from Krishna's Engineering Platform.

==================================================
ANSWER
==================================================
`;
}