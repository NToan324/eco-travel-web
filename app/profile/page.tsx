import { ActiveFriendsCard } from "@/components/profile/active-friends-card";
import { Co2ProgressCard } from "@/components/profile/co2-progress-card";
import { EcoBadgeCard } from "@/components/profile/eco-badge-card";
import { NextMissionCard } from "@/components/profile/next-mission-card";
import { StatsRow } from "@/components/profile/stats-row";
import { TreeGardenCard } from "@/components/profile/tree-garden-card";
import { TreeTimelineCard } from "@/components/profile/tree-timeline-card";
import { UserCard } from "@/components/profile/user-card";
import {
  mockCo2Progress,
  mockEcoBadge,
  mockFriends,
  mockGardenTrees,
  mockMissions,
  mockStats,
  mockTreeTimeline,
  mockUser,
} from "@/mockup/profile-mock";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[1fr_320px]">
        {/* Cột chính */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <UserCard user={mockUser} />
            <EcoBadgeCard badge={mockEcoBadge} />
          </div>

          <StatsRow stats={mockStats} />

          <div>
            <h2 className="mb-3 text-sm font-semibold text-foreground">
              Tác động của bạn
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <TreeTimelineCard
                treeCount={24}
                location="Cần Giờ"
                steps={mockTreeTimeline}
              />
              <TreeGardenCard trees={mockGardenTrees} />
              <Co2ProgressCard data={mockCo2Progress} />
            </div>
          </div>
        </div>

        {/* Sidebar phải */}
        <div className="flex flex-col gap-6">
          <NextMissionCard missions={mockMissions} />
          <ActiveFriendsCard friends={mockFriends} />
        </div>
      </div>
    </div>
  );
}
