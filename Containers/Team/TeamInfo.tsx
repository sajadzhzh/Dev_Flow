"use client";

import { teamStats } from "@/Actions/team";
import Loading from "@/app/loading";
import Card from "@/Components/ui/Cards/SmallCard";
import { FolderOpen, Gavel, SquareCheck, Users } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Data = {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  projects: Projects;
};

type Projects = {
  id: number;
  name: string;
  status: number;
  taskCount: number;
};

export default function TeamInfo({ teamId }: { teamId: number }) {
  const [Data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const request = async () => {
      const req = await teamStats(teamId);

      switch (req.status) {
        case "error":
          setData(null);
          setLoading(false);
          setUsers(0);
          toast.error(req.message);
          break;
        case "success":
          setUsers(req.users.length);
          setData(req.data);
          setLoading(false);
          break;
      }
    };
    request();
  }, []);

  return (
    <>
      {Data && (
        <>
          <Card
            title="تسک ها"
            value={Data.totalTasks}
            icon={Gavel}
            color="purple"
          />

          <Card
            title="پروژه‌های فعال"
            value={Data.activeProjects}
            icon={FolderOpen}
            color="blue"
          />

          <Card
            title="پروژه‌ها"
            value={Data.totalProjects}
            icon={SquareCheck}
            color="green"
          />

          <Card title="تعداد اعضا" value={users} icon={Users} color="orange" />
        </>
      )}

      {loading && (
        <Loading />
      )}
    </>
  );
}
