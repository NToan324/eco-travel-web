import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FriendActivity } from "@/types/profile";

interface ActiveFriendsCardProps {
  friends: FriendActivity[];
}

export function ActiveFriendsCard({ friends }: ActiveFriendsCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">
        Bạn bè đang hoạt động
      </p>

      <ul className="mt-3 space-y-3">
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center gap-2.5">
            <Avatar className="h-8 w-8">
              <AvatarImage src={friend.avatarUrl} alt={friend.name} />
              <AvatarFallback>{friend.name[0]}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-foreground">
                {friend.name}
              </p>
              <p className="truncate text-[11px] text-muted-foreground">
                {friend.status}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
