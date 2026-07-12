// easterEggs.js
// Why this file exists:
// Fun/hidden responses are content, not logic. Keeping them out of
// terminalCommands.js means the registry file stays readable as "what commands
// exist" while this file stays readable as "what they say". Anyone editing copy
// (e.g. adding a new fortune) never has to touch command-execution code.

export const fortunes = [
  'The best code is the code you did not have to write.',
  'A bug found in dev is a bug never met in prod.',
  'Simplicity is the ultimate form of reliability.',
  'Every senior engineer was once confused by a semicolon.',
  'Ship small. Ship often. Roll back calmly.',
  'The compiler is not your enemy — it is your first reviewer.',
  'Tests are a love letter to your future self.',
];

export const motivations = [
  'Progress, not perfection. Commit it.',
  'You do not need to feel ready to start — you need to start to feel ready.',
  'Small consistent reps beat rare heroic ones. In the gym and in the codebase.',
  'Every expert shipped a lot of mediocre v1s first.',
  'Discipline today is optionality tomorrow.',
];

export const asciiBanner = String.raw`
 _  ____     __  _____ _   _  ____ ___ _   _ _____
| |/ /\ \   / / | ____| \ | |/ ___|_ _| \ | | ____|
| ' /  \ \ / /  |  _| |  \| | |  _ | ||  \| |  _|
| . \   \ V /   | |___| |\  | |_| || || |\  | |___
|_|\_\   \_/    |_____|_| \_|\____|___|_| \_|_____|

Engineering Console v1.0.0 — type "help" to get started
`;

export function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
