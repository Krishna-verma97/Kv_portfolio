import { Target, CheckCircle2 } from "lucide-react";
import mission from "../../data/mission";
import DashboardSection from "./DashboardSection";
// import { Target } from "lucide-react";

export default function MissionCard() {
  return (
    <>
    <DashboardSection
      icon={Target}
title="Current Mission"
      subtitle="What I'm currently focused on."
    >

    
    <section className="mt-14 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">

      <div className="flex items-center gap-3">
        <Target className="text-indigo-500" />
        <h2 className="text-3xl font-bold">
          Current Mission
        </h2>
      </div>

      <p className="mt-5 text-gray-600 dark:text-gray-400">
        {mission.description}
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-2">

        {mission.focus.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
          >
            <CheckCircle2
              size={18}
              className="text-emerald-500"
            />

            <span>{item}</span>

          </div>
        ))}

      </div>

      <div className="mt-10">

        <div className="flex justify-between mb-2">

          <span className="font-medium">
            Overall Progress
          </span>

          <span className="font-bold text-indigo-500">
            {mission.progress}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700">

          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
            style={{
              width: `${mission.progress}%`,
            }}
          />

        </div>

        <p className="mt-4 text-sm text-gray-500">
          🎯 Target: {mission.target}
        </p>

      </div>

    </section>

    </DashboardSection>
    </>
  );
}