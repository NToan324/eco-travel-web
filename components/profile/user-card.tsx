import { ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { UserProfile } from "@/types/profile";

interface UserCardProps {
  user: UserProfile;
}

export function UserCard({ user }: UserCardProps) {
  const initials = user.name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex flex-col md:items-start items-center gap-3">
      <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-base font-semibold text-foreground">{user.name}</p>
        <div className="mt-0.5 flex items-center gap-1 text-sm text-emerald-700">
          <span>{user.membershipLabel}</span>
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}
