/** Default local-search weights. Higher weights preserve the intended field priority. */
export const SEARCH_FIELD_WEIGHTS = Object.freeze({
  title: 100,
  category: 80,
  tags: 70,
  commands: 65,
  examples: 60,
  resources: 55,
  headings: 50,
  description: 45,
  keywords: 40,
  content: 20,
});

export const SEARCH_CONFIG = Object.freeze({
  fieldWeights: SEARCH_FIELD_WEIGHTS,
  stopWords: [],
});
