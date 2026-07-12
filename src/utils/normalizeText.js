/**
 * Produces a consistent search representation without changing the source text.
 * Unicode letters and numbers are retained so the engine remains locale-friendly.
 */
export function normalizeText(value = "") {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
