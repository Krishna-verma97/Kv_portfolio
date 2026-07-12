// terminalFormatter.js
// Why this file exists:
// Command `execute()` functions return plain data/intent, not JSX. This file
// converts that data into typed "output block" objects ({ type, content, ... })
// that TerminalOutput.jsx knows how to render. This keeps the command registry
// framework-agnostic (no JSX inside data/terminalCommands.js) and keeps all
// "what does a table/heading/code block look like" decisions in TerminalOutput.

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `out-${Date.now()}-${idCounter}`;
}

/**
 * Output block shape: { id, type, payload, timestamp }
 * type is one of: success | error | warning | info | link | code | table | heading | plain
 */
function makeBlock(type, payload) {
  return { id: nextId(), type, payload, timestamp: Date.now() };
}

export const formatSuccess = (text) => makeBlock('success', { text });
export const formatError = (text) => makeBlock('error', { text });
export const formatWarning = (text) => makeBlock('warning', { text });
export const formatInfo = (text) => makeBlock('info', { text });
export const formatPlain = (text) => makeBlock('plain', { text });
export const formatHeading = (text) => makeBlock('heading', { text });
export const formatCode = (code, language = '') => makeBlock('code', { code, language });
export const formatLink = (label, href) => makeBlock('link', { label, href });

/**
 * columns: string[]  rows: string[][]
 */
export const formatTable = (columns, rows) => makeBlock('table', { columns, rows });

/**
 * Wraps the raw echoed input line (what the user typed) shown above the
 * command's own output.
 */
export const formatEcho = (raw) => makeBlock('echo', { text: raw });
