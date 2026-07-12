import toolbox from "../../data/toolbox";
import ToolChip from "./ToolChip";

import DashboardSection from "./DashboardSection";
import { Wrench } from "lucide-react";

export default function ToolboxSection() {
  return (
    <>
    <DashboardSection
   icon={Wrench}
title="Toolbox"
    subtitle="Technologies and tools I use every day."
>
    <section>

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Toolbox
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Technologies and tools I use every day.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">

        {toolbox.map((tool) => (
          <ToolChip
            key={tool.name}
            tool={tool}
          />
        ))}

      </div>

    </section>
    </DashboardSection>
    </>
  );
}