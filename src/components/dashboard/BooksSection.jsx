import books from "../../data/books";
import BookCard from "./BookCard";

export default function BooksSection() {
  return (
    <section>

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Current Books
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Books currently shaping my engineering mindset.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {books.map((book) => (
          <BookCard
            key={book.title}
            book={book}
          />
        ))}

      </div>

    </section>
  );
}