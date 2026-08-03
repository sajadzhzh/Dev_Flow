"use client";

import { useEffect, useState } from "react";
import TeamInfoModal from "./InfoModal";
import TeamCard from "./TeamCard";
import { getTeam } from "@/Actions/team";
import toast from "react-hot-toast";
import UsersTable from "./Users";
import SearchItems from "@/Components/Layout/Search";
import SelectBox from "@/Components/ui/Input/Select";
import Card from "@/Components/ui/Cards/SmallCard";
import TeamInviteModal from "./InviteModal";
import { FolderOpen, Gavel, SquareCheck, Users } from "lucide-react";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import Loading from "@/app/loading";

type Team = {
  id: number;
  teamId: number;
  userId: number;
  role: number;
  joinedAt: Timestamp;
};

export default function TeamModifier() {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const req = await getTeam();

      switch (req.status) {
        case "error":
          setTeam(null);
          setLoading(false);
          toast.error(req.message);
          break;
        case "success":
          setTeam(req.data);
          setLoading(false);
      }
    };

    request();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="flex items-center justify-end gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          {team && <TeamInviteModal />}
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <h2 className="text-2xl m-0">اعضای تیم</h2>
          <p className="text-sm text-gray-400">مدیریت اعضای تیم و عملکرد کلی</p>
        </div>
      </div>

      {loading && <Loading />}

      {team ? <TeamCard /> : <TeamInfoModal createTeam />}

      {team && (
        <>
          <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
            <Card title="تسک های فعال" value={20} icon={Gavel} color="purple" />

            <Card
              title="پروژه‌های فعال"
              value={12}
              icon={FolderOpen}
              color="blue"
            />

            <Card
              title="پروژه‌های تکمیل شده"
              value={8}
              icon={SquareCheck}
              color="green"
            />

            <Card title="تعداد اعضا" value={2} icon={Users} color="orange" />
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              <SelectBox
                name="filterUsers"
                id="filterUsers"
                values={["بیشترین پروژه", "بیشترین تسک", "آخرین فعالیت"]}
              />
            </div>

            <div className="w-full lg:w-1/3">
              <SearchItems name="searchUsers" placeholder="جستجو اعضا" />
            </div>
          </div>

          <UsersTable />
        </>
      )}
    </>
  );
}
