import { BsArrowRight } from "react-icons/bs";
import { TOTAL_DROPS_NEEDED, WATERING_CAN_DROPS, INITIAL_DROPS } from "./types";

interface ProgressSectionProps {
  waterDrops: number;
  hasWatered: boolean;
  canWater: boolean;
}

const ProgressSection = ({
  waterDrops,
  hasWatered,
  canWater,
}: ProgressSectionProps) => {
  const percentage = Math.round((waterDrops / TOTAL_DROPS_NEEDED) * 100);
  const prevPercentage = Math.round((INITIAL_DROPS / TOTAL_DROPS_NEEDED) * 100);

  return (
    <div className="space-y-4">
      <p className="text-sm font-bold text-black mb-1.5 flex items-center gap-2">
        Tiến trình phát triển: {hasWatered ? prevPercentage : percentage}%
        <BsArrowRight />
        {!hasWatered && canWater && (
          <span className="text-black font-normal flex items-center gap-1">
            {percentage +
              Math.round((WATERING_CAN_DROPS / TOTAL_DROPS_NEEDED) * 100)}
            % sau khi tưới
          </span>
        )}
        {hasWatered && (
          <span className="text-black font-normal flex items-center gap-1">
            {percentage}% sau khi tưới
          </span>
        )}
      </p>
      <div className="h-8 bg-green-100 p-1.5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#40916C] to-[#95D5B2] transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">
        {waterDrops} / {TOTAL_DROPS_NEEDED} giọt nước
      </p>
    </div>
  );
};

export default ProgressSection;
