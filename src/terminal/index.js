// index.js
// Why this file exists:
// The public export surface for this package. Host apps should only ever
// import from here (e.g. `import { TerminalPage } from 'kv-terminal'`) —
// everything else in src/ is an internal implementation detail and may change
// without notice.

// export { default as TerminalPage } from './terminal/TerminalPage';
export { default as TerminalPage } from "./TerminalPage";