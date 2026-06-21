import { Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { EcoBadge } from "@/types/profile";

interface EcoBadgeCardProps {
  badge: EcoBadge;
}

export function EcoBadgeCard({ badge }: EcoBadgeCardProps) {
  return (
    <div className="flex flex-1 items-center gap-4 rounded-2xl bg-linear-to-br from-[#003215] to-[#0A4D2E] p-5 text-white shadow-sm">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-700/60">
        <Award className="h-7 w-7 text-emerald-200" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-emerald-200">
          Huy hiệu sinh thái
        </p>
        <p className="truncate text-lg font-semibold leading-tight">
          {badge.title}
        </p>
        <p className="text-sm text-emerald-200">Cấp {badge.level}</p>

        <div className="mt-2">
          <Progress
            value={badge.progressPercent}
            className="h-1.5 bg-emerald-700/60 [&>div]:bg-[#ffffff]"
          />
          <p className="mt-1 text-xs text-emerald-200">
            Còn {badge.pointsToNextLevel} điểm để lên cấp {badge.level + 1}
          </p>
        </div>
      </div>
    </div>
  );
}
