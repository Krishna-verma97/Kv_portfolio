import { FaGithub } from "react-icons/fa";
import { Github } from "lucide-react";
import DashboardSection from "./DashboardSection";
import dashboardStats  from "../../data/dashboardStats";

export default function GithubSection() {
  return (
    <DashboardSection
      icon={Github}
      title="GitHub Stats"
      subtitle="Open-source activity and development statistics."
    >
      <div className="space-y-8">

        {/* ================= Profile ================= */}

        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-500/10 p-4">
              <FaGithub
                size={40}
                className="text-emerald-500"
              />
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                Krishna Verma
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                @Krishna-verma97
              </p>

            </div>

          </div>

          <p className="mt-6 leading-7 text-gray-600 dark:text-gray-300">
            Building full-stack applications, engineering documentation,
            DevOps experiments, cloud projects and continuously learning
            modern technologies.
          </p>

        </div>

        {/* ================= Metrics ================= */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
            <h4 className="text-3xl font-bold text-emerald-500">
              {dashboardStats.projects}
            </h4>

            <p className="mt-2 text-sm text-gray-500">
              Projects
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
            <h4 className="text-3xl font-bold text-blue-500">
              {dashboardStats.knowledge}
            </h4>

            <p className="mt-2 text-sm text-gray-500">
              Knowledge
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
            <h4 className="text-3xl font-bold text-purple-500">
              {dashboardStats.articles}
            </h4>

            <p className="mt-2 text-sm text-gray-500">
              Articles
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 text-center">
            <h4 className="text-3xl font-bold text-yellow-500">
              {dashboardStats.learning}
            </h4>

            <p className="mt-2 text-sm text-gray-500">
              Learning
            </p>
          </div>

        </div>

        {/* ================= GitHub Streak ================= */}

        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4">

          <img
            src="https://streak-stats.demolab.com?user=Krishna-verma97&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="w-full rounded-xl"
          />

        </div>

        {/* ================= Contribution Graph ================= */}

        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-4">

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=Krishna-verma97&theme=github-dark"
            alt="Contribution Graph"
            className="w-full rounded-xl"
          />

        </div>

        {/* ================= Button ================= */}

        <div className="flex justify-center">

          <a
            href="https://github.com/Krishna-verma97"
            target="_blank"
            rel="noreferrer"
            className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-emerald-500
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-emerald-600
            "
          >

            <FaGithub size={20} />

            <span>
              Visit GitHub Profile
            </span>

          </a>

        </div>

      </div>
    </DashboardSection>
  );
}