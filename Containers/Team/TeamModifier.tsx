"use client";

import { useEffect, useState } from "react";
import TeamInfoModal from "./InfoModal";
import TeamCard from "./TeamCard";
import { getTeam } from "@/Actions/team";
import toast from "react-hot-toast";
import UsersTable from "./Users";
import SearchItems from "@/Components/Layout/Search";
import SelectBox from "@/Components/ui/Input/Select";
import TeamInviteModal from "./InviteModal";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import Loading from "@/app/loading";
import { Role } from "@/Lib/Constants/Role";
import TeamInfo from "./TeamInfo";

type Team = {
  id: number;
  team_id: number;
  user_id: number;
  role: number;
  joinedAt: Timestamp;
};

export default function TeamModifier() {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      const req = await getTeam();
      setLoading(true);

      switch (req.status) {
        case "error":
          setTeam(null);
          setLoading(false);
          toast.error(req.message);
          break;
        case "success":
          setTeam(req.data);
          setLoading(false);
          break;
      }
    };

    request();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="flex items-center justify-end gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          {team && team?.role == Role.OWNER && <TeamInviteModal />}
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <h2 className="text-2xl m-0">اعضای تیم</h2>
          <p className="text-sm text-gray-400">مدیریت اعضای تیم و عملکرد کلی</p>
        </div>
      </div>

      {loading && <Loading />}

      {team ? (
        <TeamCard team_id={team.team_id} role={team.role} />
      ) : (
        <TeamInfoModal createTeam />
      )}

      {team && (
        <>
          <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
            <TeamInfo teamId={team.team_id}/>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              <SelectBox
                name="filterUsers"
                id="filterUsers"
                values={[
                  { label: "آخرین فعالیت", value: "1" },
                  { label: "بیشترین تسک", value: "2" },
                  { label: "بیشترین پروژه", value: "3" },
                ]}
              />
            </div>

            <div className="w-full lg:w-1/3">
              <SearchItems name="searchUsers" placeholder="جستجو اعضا" />
            </div>
          </div>

          <UsersTable teamId={team.team_id}/>
        </>
      )}
    </>
  );
}
