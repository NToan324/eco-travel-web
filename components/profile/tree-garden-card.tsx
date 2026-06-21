import { Sprout } from "lucide-react";
import type { GardenTree } from "@/types/profile";

interface TreeGardenCardProps {
  trees: GardenTree[];
}

export function TreeGardenCard({ trees }: TreeGardenCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-emerald-50/60 p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">Vườn cây của bạn</p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {trees.map((tree) => (
          <div
            key={tree.id}
            className="flex flex-col items-center gap-1 rounded-xl bg-white py-3 shadow-sm"
          >
            <Sprout className="h-6 w-6 text-emerald-600" />
            <span className="text-[11px] text-muted-foreground">
              {tree.species}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
