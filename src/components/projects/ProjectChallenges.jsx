export default function ProjectChallenges({ challenges }) {
  if (!challenges?.length) return null;

  return (
    <section
      id="challenges"
      className="rounded-3xl border border-gray-200 bg-slate-50 p-8 shadow-sm dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Challenges
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Each challenge includes the problem, root cause, solution, and result.
        </p>
      </div>
      <div className="space-y-4">
        {challenges.map((challenge, index) => (
          <div
            key={`challenge-${index}`}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Challenge {index + 1}
            </h3>
            <dl className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">
                  Problem
                </dt>
                <dd className="mt-1">{challenge.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">
                  Root cause
                </dt>
                <dd className="mt-1">{challenge.rootCause}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">
                  Solution
                </dt>
                <dd className="mt-1">{challenge.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900 dark:text-white">
                  Result
                </dt>
                <dd className="mt-1">{challenge.result}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
