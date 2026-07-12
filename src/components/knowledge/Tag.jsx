import { Link } from "react-router-dom";

export default function Tag({
  children,
  clickable = true,
}) {
  const tag = String(children).trim();

  const classes =
    "rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 transition hover:bg-emerald-100 hover:text-emerald-700 dark:bg-gray-700/70 dark:text-gray-300 dark:hover:bg-emerald-900/40 dark:hover:text-emerald-300";

  if (!clickable) {
    return <span className={classes}>{tag}</span>;
  }

  return (
    <Link
      to={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
      className={classes}
    >
      #{tag}
    </Link>
  );
}