import { Link } from "react-router-dom";
import { FolderKanban, BookOpen, PenSquare } from "lucide-react";

export default function DeveloperHub() {
  const cards = [
    {
      title: "Projects",
      description:
        "Production-ready applications built with React, MERN, Firebase and modern technologies.",
      icon: FolderKanban,
      link: "/projects",
      button: "Explore Projects",
    },
    {
      title: "Knowledge Base",
      description:
        "Detailed documentation, notes, commands, interview preparation and technical guides.",
      icon: BookOpen,
      link: "/knowledge",
      button: "Browse Knowledge",
    },
    {
      title: "Developer Blog",
      description:
        "Engineering articles, tutorials, learning journey, career experiences and best practices.",
      icon: PenSquare,
      link: "/blog",
      button: "Read Articles",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Developer Hub
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Everything you'll find on this portfolio.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={40}
                  className="text-emerald-500"
                />

                <h3 className="mt-6 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  className="mt-8 inline-block rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  {card.button} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}