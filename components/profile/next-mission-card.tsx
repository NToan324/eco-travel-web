import { HelpCircle, Sprout, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MissionIcon, MissionItem } from "@/types/profile";

const ICON_MAP: Record<MissionIcon, typeof Sprout> = {
  sprout: Sprout,
  tree: TreeDeciduous,
};

interface NextMissionCardProps {
  missions: MissionItem[];
  onViewNextMission?: () => void;
}

export function NextMissionCard({
  missions,
  onViewNextMission,
}: NextMissionCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">Sứ mệnh tiếp theo</p>

      <ul className="mt-3 space-y-3">
        {missions.map((mission) => {
          const Icon = ICON_MAP[mission.icon];
          return (
            <li key={mission.id} className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex-1 text-xs text-foreground">
                {mission.label}
              </span>
              <HelpCircle className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            </li>
          );
        })}
      </ul>

      <Button
        onClick={onViewNextMission}
        className="mt-4 h-12 w-full bg-primary text-white hover:bg-emerald-800"
      >
        Xem sứ mệnh tiếp theo
      </Button>
    </div>
  );
}
