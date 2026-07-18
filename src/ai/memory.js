// src/ai/memory.js

import { MAX_HISTORY } from "./constants";

const conversationHistory = [];

export function addConversation(role, content) {
  conversationHistory.push({
    role,
    content,
  });

  // Keep full memory trimmed
  if (conversationHistory.length > MAX_HISTORY) {
    conversationHistory.splice(
      0,
      conversationHistory.length - MAX_HISTORY
    );
  }
}

export function getConversationHistory() {
  return conversationHistory;
}

export function clearConversation() {
  conversationHistory.length = 0;
}