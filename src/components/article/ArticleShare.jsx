import {
  Copy,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ArticleShare() {
  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <div className="mt-8 flex gap-3">

      <button
        onClick={copy}
        className="rounded-lg border p-2 transition hover:border-emerald-500"
      >
        <Copy size={18}/>
      </button>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border p-2 transition hover:border-emerald-500"
      >
        <Linkedin size={18}/>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border p-2 transition hover:border-emerald-500"
      >
        <Twitter size={18}/>
      </a>

    </div>
  );
}