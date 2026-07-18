import { knowledgeStore } from "./knowledgeStore";
import { formatContext } from "./contextFormatter";
import {
  MAX_CONTEXT_DOCUMENTS,
  MAX_DOCUMENT_LENGTH,
  MIN_SEARCH_SCORE,
} from "./constants";

export async function retrieveContext(query) {
  const results = await knowledgeStore.search(query);

  const filteredResults = results
    .filter((doc) => doc.score >= MIN_SEARCH_SCORE)
    .slice(0, MAX_CONTEXT_DOCUMENTS)
    .map((doc) => ({
      ...doc,
      content: (doc.content || "").slice(0, MAX_DOCUMENT_LENGTH),
    }));

  return formatContext(filteredResults);
}