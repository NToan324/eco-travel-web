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
  name: "Vũ Hoàng Anh Thy",
  membershipLabel: "Thành viên Xanh",
  avatarUrl: "/avatar.jpeg",
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
    name: "Gấm Nguyễn",
    avatarUrl: "/gam-avt.png",
    status: "1 thành viên hoạt động",
  },
  {
    id: "f2",
    name: "Nguyễn Đào",
    avatarUrl: "/dao-avt.png",
    status: "Thành viên hoạt động",
  },
  {
    id: "f3",
    name: "Thầy Henry",
    avatarUrl: "/henry-avt.png",
    status: "Thành viên hoạt động",
  },
  {
    id: "f4",
    name: "Lê Chánh Tín",
    avatarUrl: "https://i.pravatar.cc/80?img=4",
    status: "Thành viên hoạt động",
  },
  {
    id: "f5",
    name: "Cô Hoàng Thị Vân",
    avatarUrl: "https://i.pravatar.cc/80?img=15",
    status: "Thành viên hoạt động",
  },
  {
    id: "f6",
    name: "Lâm Quyền",
    avatarUrl: "/quyen-avt.png",
    status: "Thành viên hoạt động",
  },
];
