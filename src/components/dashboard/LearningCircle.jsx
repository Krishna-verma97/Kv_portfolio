import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function LearningCircle({ item }) {
  return (
    <div className="group flex flex-col items-center">

      <div className="w-28 h-28 transition duration-300 group-hover:scale-110">

        <CircularProgressbar
          value={item.progress}
          text={`${item.progress}%`}
          styles={buildStyles({
            pathColor: item.color,
            textColor: item.color,
            trailColor: "#1f2937",
          })}
        />

      </div>

      <h3 className="mt-4 font-semibold">
        {item.name}
      </h3>

      <p className="text-sm text-gray-500">
        {item.status}
      </p>

    </div>
  );
}