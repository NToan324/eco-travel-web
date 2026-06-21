import { Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TreeTimelineStep } from "@/types/profile";

interface TreeTimelineCardProps {
  treeCount: number;
  location: string;
  steps: TreeTimelineStep[];
}

export function TreeTimelineCard({
  treeCount,
  location,
  steps,
}: TreeTimelineCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">
        {treeCount} cây được trồng tại {location}
      </p>

      <ol className="mt-4 flex-1 space-y-0">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className="relative flex items-start gap-3 pb-5 last:pb-0"
          >
            {index < steps.length - 1 && (
              <span
                className={cn(
                  "absolute left-2.75 top-6 h-full w-px",
                  step.completed ? "bg-primary" : "bg-border",
                )}
              />
            )}
            <span
              className={cn(
                "z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                step.completed ?
                  "bg-primary text-white"
                : "border-2 border-border bg-white text-muted-foreground",
              )}
            >
              {step.completed && <Check className="h-3.5 w-3.5" />}
            </span>
            <p
              className={cn(
                "pt-0.5 text-xs",
                step.completed ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {step.label}
            </p>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="mt-2 flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-primary transition hover:bg-emerald-100"
      >
        <MapPin className="h-3.5 w-3.5" />
        Xem vị trí trên bản đồ
      </button>
    </div>
  );
}
