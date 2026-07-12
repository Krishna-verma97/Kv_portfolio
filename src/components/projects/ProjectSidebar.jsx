import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectSidebar({ project, relatedProjects }) {
  const [copyState, setCopyState] = useState("Copy link");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyState("Copied!");
      window.setTimeout(() => setCopyState("Copy link"), 1800);
    } catch {
      setCopyState("Unable to copy");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.shortDescription,
        url: window.location.href,
      });
    } else {
      handleCopyLink();
    }
  };

  return (
    <aside className="space-y-6 rounded-3xl border border-gray-200 bg-slate-50 p-6 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Project details
        </p>
        <div className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white">
            {project.title}
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-300">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Tech stack
        </p>
        <div className="mt-3 space-y-2">
          {(project.techStack?.frontend || []).map((item) => (
            <span
              key={item}
              className="block rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Project actions
        </p>
        <div className="grid gap-3">
          <button
            type="button"
            onClick={handleCopyLink}
            className="w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            {copyState}
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          >
            Share project
          </button>
        </div>
      </div>

      <div className="space-y-3 rounded-3xl bg-white p-4 shadow-sm dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Related case studies
        </p>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {relatedProjects.map((related) => (
            <li key={related.slug}>
              <Link
                to={`/projects/${related.slug}`}
                className="text-slate-900 transition hover:text-emerald-600 dark:text-slate-100 dark:hover:text-emerald-400"
              >
                {related.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
