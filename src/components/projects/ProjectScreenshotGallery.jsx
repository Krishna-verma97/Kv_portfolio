export default function ProjectScreenshotGallery({ screenshots }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Screenshots
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot) => (
          <figure
            key={screenshot.alt}
            className="overflow-hidden rounded-3xl bg-slate-950/95"
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
