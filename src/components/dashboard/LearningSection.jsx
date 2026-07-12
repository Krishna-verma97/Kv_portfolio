import learning from "../../data/learning";
import LearningCircle from "./LearningCircle";
import DashboardSection from "./DashboardSection";
import { BookOpen } from "lucide-react";

export default function LearningSection() {
  return (
    <>
     <DashboardSection
      icon={BookOpen}
title="Current Learning"
      subtitle="Technologies I'm currently mastering."
    >
    <section>

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Current Learning
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Technologies currently shaping my engineering journey.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

        {learning.map((item) => (
          <LearningCircle
            key={item.name}
            item={item}
          />
        ))}

      </div>

    </section>
    </DashboardSection>
    </>
  );
}