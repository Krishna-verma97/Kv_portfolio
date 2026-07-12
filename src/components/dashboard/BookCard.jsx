export default function BookCard({ book }) {
  return (
    <div className="group">

      <div className="aspect-[3/4] rounded-xl border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-indigo-600 to-purple-700 p-5 text-white shadow-lg transition duration-300 group-hover:-translate-y-2">

        <div className="flex h-full flex-col justify-between">

          <div>
            <h3 className="text-lg font-bold">
              {book.title}
            </h3>

            <p className="mt-2 text-sm opacity-80">
              {book.author}
            </p>
          </div>

          <span className="text-xs opacity-70">
            {book.status}
          </span>

        </div>

      </div>

      <div className="mt-4">

        <div className="flex justify-between text-sm">

          <span>{book.progress}%</span>

          <span>{book.status}</span>

        </div>

        <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">

          <div
            className="h-2 rounded-full bg-emerald-500"
            style={{
              width: `${book.progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}