import type {
  Co2Progress,
  EcoBadge,
  FriendActivity,
  GardenTree,
  MissionItem,
  StatItem,
  TreeTimelineStep,
  UserProfile,
} from "@/types/profile";

export const mockUser: UserProfile = {
  name: "Nguyễn Minh Anh",
  membershipLabel: "Thành viên Xanh",
  avatarUrl: "https://i.pravatar.cc/160?img=47",
};

export const mockEcoBadge: EcoBadge = {
  title: "Người Du Lịch Xanh",
  level: 2,
  pointsToNextLevel: 180,
  progressPercent: 62,
};

export const mockStats: StatItem[] = [
  { id: "trips", icon: "footprints", value: "12", label: "chuyến đi xanh" },
  { id: "trees", icon: "sprout", value: "24", label: "cây đã trồng" },
  { id: "co2", icon: "cloud", value: "64 kg", label: "CO₂ đã bù đắp" },
  {
    id: "absorbed",
    icon: "award",
    value: "12",
    label: "cây đã hấp thụ đủ chỉ tiêu",
    href: "/profile/cay-cua-toi",
  },
];

export const mockTreeTimeline: TreeTimelineStep[] = [
  { id: "step-1", label: "Đăng ký trồng cây tại Cần Giờ", completed: true },
  { id: "step-2", label: "Chọn lô đất trồng", completed: true },
  { id: "step-3", label: "Ươm giống đước, mắm", completed: true },
  { id: "step-4", label: "Trồng 24 cây giống", completed: true },
  { id: "step-5", label: "Cây bén rễ, theo dõi sinh trưởng", completed: false },
];

export const mockGardenTrees: GardenTree[] = [
  { id: "t1", species: "Đước" },
  { id: "t2", species: "Mắm" },
  { id: "t3", species: "Bần" },
  { id: "t4", species: "Sú" },
  { id: "t5", species: "Vẹt" },
  { id: "t6", species: "Dà" },
  { id: "t7", species: "Đước" },
  { id: "t8", species: "Mắm" },
  { id: "t9", species: "Bần" },
];

export const mockCo2Progress: Co2Progress = {
  absorbedKg: 64,
  targetKg: 5000,
  caption: "Đã đóng góp vào quỹ bù đắp carbon toàn cầu",
};

export const mockMissions: MissionItem[] = [
  { id: "m1", icon: "sprout", label: "24 cây được trồng tại Cần Giờ" },
  { id: "m2", icon: "tree", label: "Tối ưu hành trình xanh mới" },
];

export const mockFriends: FriendActivity[] = [
  {
    id: "f1",
    name: "Nguyễn Minh",
    avatarUrl: "https://i.pravatar.cc/80?img=12",
    status: "1 thành viên hoạt động",
  },
  {
    id: "f2",
    name: "Yến Xinh",
    avatarUrl: "https://i.pravatar.cc/80?img=32",
    status: "Thành viên hoạt động",
  },
  {
    id: "f3",
    name: "Ngọc Linh",
    avatarUrl: "https://i.pravatar.cc/80?img=25",
    status: "Thành viên hoạt động",
  },
  {
    id: "f4",
    name: "Quang Minh",
    avatarUrl: "https://i.pravatar.cc/80?img=8",
    status: "Thành viên hoạt động",
  },
];
