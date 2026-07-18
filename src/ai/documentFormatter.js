export function formatValue(value, indent = "") {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "object") {
          return `${indent}-\n${formatValue(item, indent + "  ")}`;
        }

        return `${indent}- ${item}`;
      })
      .join("\n");
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, val]) => {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (c) => c.toUpperCase());

        return `${indent}${label}:\n${formatValue(val, indent + "  ")}`;
      })
      .join("\n\n");
  }

  return `${indent}${value}`;
}

export function createReadableDocument(title, data) {
  return `# ${title}\n\n${formatValue(data)}`;
}