// lib/types/profile.ts

export interface UserProfile {
  name: string;
  membershipLabel: string;
  avatarUrl: string;
}

export interface EcoBadge {
  title: string;
  level: number;
  pointsToNextLevel: number;
  /** 0 - 100 */
  progressPercent: number;
}

export type StatIcon = "footprints" | "sprout" | "cloud" | "award";

export interface StatItem {
  id: string;
  icon: StatIcon;
  value: string;
  label: string;
  /** Thẻ có thể bấm để xem chi tiết (vd: danh sách cây đã hấp thụ CO2) */
  href?: string;
}

export interface TreeTimelineStep {
  id: string;
  label: string;
  completed: boolean;
}

export interface GardenTree {
  id: string;
  species: string;
}

export type MissionIcon = "sprout" | "tree";

export interface MissionItem {
  id: string;
  icon: MissionIcon;
  label: string;
}

export interface FriendActivity {
  id: string;
  name: string;
  avatarUrl: string;
  status: string;
}

export interface Co2Progress {
  absorbedKg: number;
  targetKg: number;
  caption: string;
}
