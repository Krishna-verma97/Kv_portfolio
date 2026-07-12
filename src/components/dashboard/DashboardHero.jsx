import { Briefcase, Target, Code2, Circle } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="grid gap-10 lg:grid-cols-2">

      {/* Left */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Engineering Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Always Building.
          <br />
          Always Learning.
          <br />
          Always Improving.
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-400">
          My public engineering dashboard where I share what I'm learning,
          building and improving every week.
        </p>

      </div>

      {/* Right */}

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-sm">

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <Briefcase className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">
                Current Role
              </p>
              <p className="font-semibold">
                Wipro Scholar Trainee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Target className="text-emerald-500" />
            <div>
              <p className="text-sm text-gray-500">
                Current Goal
              </p>
              <p className="font-semibold">
                AI Product Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Code2 className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">
                Current Stack
              </p>
              <p className="font-semibold">
                React • Node • Docker • AWS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Circle
              className="text-green-500"
              fill="currentColor"
              size={14}
            />

            <div>
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="font-semibold text-green-500">
                Available for Collaboration
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}