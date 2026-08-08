import Image from "next/image";
import TeamActions from "./Actions";
import Button from "@/Components/ui/Input/Button";
import { CircleUserRound } from "lucide-react";

type User = {
  id: number;
  userName: string;
  email: string;
  avatar: string;
};

export default function TeamMobile({
  onDelete,
  invite,
  user,
}: {
  onDelete?: () => void;
  invite?: boolean;
  user: User;
}) {
  return (
    <div className={`w-full flex ${!invite && "xl:hidden"}`}>
      <div className="w-2/3">
        <div className="flex gap-2 items-center">
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
            <CircleUserRound size={28} />
          )}

          <div className="flex flex-col">
            <h3>{user.userName}</h3>
            <p className="text-[13px] text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      {onDelete && (
        <div className="w-1/3 flex items-center justify-end">
          <TeamActions onDelete={onDelete} />
        </div>
      )}

      {invite && (
        <div className="w-1/3 flex items-center justify-end">
          <Button className="w-full lg:w-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white">
            دعوت
          </Button>
        </div>
      )}
    </div>
  );
}
