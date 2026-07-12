import timeline from "../../data/timeline";
import TimelineItem from "./TimelineItem";
import DashboardSection from "./DashboardSection";
import { ChartNoAxesCombined } from "lucide-react";

export default function TimelineSection() {
  return (
    <>
    <DashboardSection
  icon={ChartNoAxesCombined}
title="Progress Timeline"
  subtitle="My engineering journey."
>
    <section>

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Progress Timeline
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          My engineering journey.
        </p>

      </div>

      <div>

        {timeline.map((item, index) => (
          <TimelineItem
            key={item.title}
            item={item}
            last={index === timeline.length - 1}
          />
        ))}

      </div>

    </section>
    </DashboardSection>
    </>
  );
}