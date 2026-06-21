import { CloudCog } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { Co2Progress } from "@/types/profile";

interface Co2ProgressCardProps {
  data: Co2Progress;
}

export function Co2ProgressCard({ data }: Co2ProgressCardProps) {
  const percent = Math.min(
    100,
    Math.round((data.absorbedKg / data.targetKg) * 100),
  );

  return (
    <div className="flex h-fit flex-col rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <CloudCog className="h-5 w-5 text-emerald-600" />
        <p className="text-sm font-semibold text-foreground">
          {data.absorbedKg} kg CO₂ đã được hấp thụ
        </p>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">{data.caption}</p>

      <div className="mt-auto pt-4">
        <Progress
          value={percent}
          className="h-2 bg-emerald-50 [&>div]:bg-emerald-600"
        />
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>{data.absorbedKg} kg</span>
          <span>
            Mục tiêu toàn cầu: {data.targetKg.toLocaleString("vi-VN")} kg
          </span>
        </div>
      </div>
    </div>
  );
}
