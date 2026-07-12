// commandCategories.js
// Why this file exists:
// Categories are referenced by both the command registry (data/terminalCommands.js)
// and the UI (help output, SuggestionBox grouping). Keeping the category list and
// its display metadata (label, color token, order) in one place means the UI never
// hardcodes category strings, and new categories can be added without touching
// any component.

export const CATEGORY = {
  GENERAL: 'general',
  NAVIGATION: 'navigation',
  ENGINEERING: 'engineering',
  SEARCH: 'search',
  FUN: 'fun',
};

// Order controls how `help` groups and lists categories.
export const CATEGORY_META = [
  { id: CATEGORY.GENERAL, label: 'General', colorVar: '--term-info' },
  { id: CATEGORY.NAVIGATION, label: 'Navigation', colorVar: '--term-link' },
  { id: CATEGORY.ENGINEERING, label: 'Engineering', colorVar: '--term-success' },
  { id: CATEGORY.SEARCH, label: 'Search', colorVar: '--term-warning' },
  { id: CATEGORY.FUN, label: 'Fun', colorVar: '--term-accent' },
];

export function getCategoryMeta(categoryId) {
  return CATEGORY_META.find((c) => c.id === categoryId) ?? CATEGORY_META[0];
}
