import { STEPS } from "@/constants/steps";
import { IconCheck } from "./Icon";

function PlantingProgress() {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-0">
        {STEPS.map((step, i) => (
          <div
            key={step.label}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex flex-col items-center">
              <IconCheck done={step.done} />
              <span className="text-xs text-gray-600 mt-1 whitespace-nowrap font-medium">
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-0.5 mb-4 mx-1 ${STEPS[i + 1].done ? "bg-[#2D6A4F]" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default PlantingProgress;
