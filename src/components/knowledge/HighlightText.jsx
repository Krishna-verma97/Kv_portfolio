import { Fragment } from "react";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function HighlightText({
  text = "",
  query = "",
  className = "",
  as: Component = "span",
}) {
  const terms = query.trim().split(/\s+/).filter(Boolean);

  if (!text || !terms.length) {
    return <Component className={className}>{text}</Component>;
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "ig");
  const parts = String(text).split(pattern);

  return (
    <Component className={className}>
      {parts.map((part, index) => {
        const isMatch = terms.some(
          (term) => term.toLocaleLowerCase() === part.toLocaleLowerCase(),
        );

        if (!part || !isMatch) {
          return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
        }

        return (
          <mark
            key={`${part}-${index}`}
            className="rounded bg-emerald-100 px-0.5 text-inherit dark:bg-emerald-900/70"
          >
            {part}
          </mark>
        );
      })}
    </Component>
  );
}
