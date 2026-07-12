import engineeringWork from "../../data/engineeringWork";
import WorkCard from "./WorkCard";
import DashboardSection from "./DashboardSection";
import { BriefcaseBusiness } from "lucide-react";

export default function EngineeringWork() {
  return (
    <DashboardSection
      icon={BriefcaseBusiness}
      title="Engineering Work"
      subtitle="Projects, products and technical systems I'm currently building."
    >
      <div className="space-y-8">

        {/* Top Stats */}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center">
            <h3 className="text-3xl font-bold text-emerald-500">
              {engineeringWork.length}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Projects
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center">
            <h3 className="text-3xl font-bold text-blue-500">
              {
engineeringWork.filter(
project => project.status === "Active"
).length
}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Status
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center">
            <h3 className="text-3xl font-bold text-purple-500">
              MERN
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Primary Stack
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 text-center">
            <h3 className="text-3xl font-bold text-orange-500">
              v3.0
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Updated
            </p>
          </div>

        </div>

        {/* Projects */}

        <div className="grid gap-6 md:grid-cols-2">
          {engineeringWork.map((work) => (
            <WorkCard
              key={work.title}
              work={work}
            />
          ))}
        </div>

      </div>
    </DashboardSection>
  );
}