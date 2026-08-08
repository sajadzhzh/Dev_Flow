import Image from "next/image";
import TeamActions from "./Actions";
import { CircleUserRound } from "lucide-react";

type User = {
  id: number;
  userName: string;
  email: string;
  avatar: string;
};

export default function TeamDesktop({
  onDelete,
  user,
}: {
  onDelete: () => void;
  user: User;
}) {
  return (
    <div className="w-full hidden xl:flex justify-between">
      <div className="w-2/8 flex items-center gap-2">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
        ) : (
          <CircleUserRound size={28}/>
        )}
        {user.userName}
      </div>

      <div className="w-2/8 flex items-center justify-center">{user.email}</div>

      <div className="w-1/8 flex items-center justify-center">5</div>

      <div className="w-1/8 flex items-center justify-center">22:00</div>

      <div className="w-1/8 flex items-center justify-end">
        <TeamActions onDelete={onDelete} />
      </div>
    </div>
  );
}
