import { TreeStage, TOTAL_DROPS_NEEDED } from "./types";

export function getTreeStage(drops: number): TreeStage {
  const pct = (drops / TOTAL_DROPS_NEEDED) * 100;
  if (pct < 15) return "sprout";
  if (pct < 35) return "seedling";
  if (pct < 55) return "sapling";
  if (pct < 80) return "young";
  return "mature";
}
