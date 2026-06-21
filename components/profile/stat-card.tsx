import { Award, ChevronRight, Cloud, Footprints, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatIcon, StatItem } from "@/types/profile";

const ICON_MAP: Record<StatIcon, typeof Footprints> = {
  footprints: Footprints,
  sprout: Sprout,
  cloud: Cloud,
  award: Award,
};

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = ICON_MAP[stat.icon];
  const isLink = Boolean(stat.href);
  const Comp = isLink ? "a" : "div";

  return (
    <Comp
      {...(isLink ? { href: stat.href } : {})}
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition",
        isLink && "cursor-pointer hover:border-emerald-200 hover:shadow-md",
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-lg font-semibold leading-tight text-foreground">
          {stat.value}
        </p>
        <p className="truncate text-xs text-muted-foreground">{stat.label}</p>
      </div>
      {isLink && (
        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
      )}
    </Comp>
  );
}
