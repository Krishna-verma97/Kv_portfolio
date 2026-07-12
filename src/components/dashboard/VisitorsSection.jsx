import DashboardSection from "./DashboardSection";
import { Eye } from "lucide-react";
import CountUp from "react-countup";
import visitorStats from "../../data/visitorStats";

export default function VisitorsSection() {
  return (
    <DashboardSection
      icon={Eye}
      title="Visitors"
      subtitle="People exploring my engineering journey."
    >
      <div className="space-y-8">

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center">

            <h3 className="text-3xl font-bold text-emerald-500">
             <CountUp
  end={visitorStats.views}
  duration={2}
  separator=","
/>
+
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Portfolio Views
            </p>

          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center">

            <h3 className="text-3xl font-bold text-indigo-500">
             {visitorStats.countries}+
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Countries
            </p>

          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center">

            <h3 className="text-3xl font-bold text-purple-500">
              {visitorStats.availability}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Online
            </p>

          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center">

            <h3 className="text-3xl font-bold text-orange-500">
              {visitorStats.thankYou}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Thank You
            </p>

          </div>

        </div>

        {/* Countries */}

        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">

          <h3 className="text-lg font-semibold">
            Top Visitor Locations
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
  {visitorStats.topCountries.map((country) => (
    <div
      key={country}
      className="rounded-xl bg-gray-100 dark:bg-gray-800 p-4 text-center"
    >
      {country}
    </div>
  ))}
</div>

        </div>

        {/* Footer */}

        <div className="rounded-2xl border border-dashed border-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 p-8 text-center">

          <h3 className="text-2xl font-bold">
            Thanks for Visiting 👋
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {visitorStats.message}
          </p>

        </div>

      </div>
    </DashboardSection>
  );
}