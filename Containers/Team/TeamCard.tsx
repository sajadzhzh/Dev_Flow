import { Role } from "@/Lib/Constants/Role";
import TeamInfoModal from "./InfoModal";
import { useEffect, useState } from "react";
import { myTeam } from "@/Actions/team";
import toast from "react-hot-toast";

type Team = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
};

type Owner = {
  id: number;
  userName: string;
  email: string;
};


export default function TeamCard({
  team_id,
  role,
}: {
  team_id: number;
  role: number;
}) {
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<Team | null>(null);
  const [owner, setOwner] = useState<Owner | null>(null);

  useEffect(() => {
    const request = async () => {
      const res = await myTeam(team_id);
      switch (res.status) {
        case "error":
          setTeam(null);
          setOwner(null);
          setLoading(false);
          toast.error(res.message);
          break;
        case "success":
          setTeam(res.data);
          setOwner(res.owner);
          setLoading(false);
          break;
      }
    };
    request();
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center border border-gray-600 rounded-xl py-4 px-6 relative bg-[#18181b]">
      <div className="userCard-gradiant absolute w-full h-full right-0 rounded-xl z-0 hidden lg:block"></div>
      <div className="w-full flex flex-col gap-4 z-10">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-between">
          <h3 className="text-xl">تیم {team?.name}</h3>

          {role == Role.OWNER && team && <TeamInfoModal team={team} />}
        </div>
        <p className="text-[13px] text-gray-400 text-justify">
          {team?.description}
        </p>
        <p className="text-[13px] text-gray-400 text-end">
          مالک : <span className="text-[15px] text-white ">{owner?.userName}</span>
        </p>
      </div>
    </div>
  );
}
