import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import SEO from "../components/seo/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 • Page Not Found | Krishna Verma"
        description="The page you're looking for doesn't exist."
      />

      <section className="flex min-h-[75vh] items-center justify-center px-6">
        <div className="max-w-xl text-center">

          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-emerald-500/10 p-6">
              <SearchX className="h-14 w-14 text-emerald-500" />
            </div>
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Error 404
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Page Not Found
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            Sorry, the page you were looking for doesn't exist,
            may have been moved, or the URL is incorrect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              <Home size={18} />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:border-emerald-500 dark:border-gray-700"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

          </div>

        </div>
      </section>
    </>
  );
}