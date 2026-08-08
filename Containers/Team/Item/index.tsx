"use client";

import { useEffect, useState } from "react";

import Dialog from "@/Components/ui/Dialog";
import TeamDesktop from "./Desktop";
import TeamMobile from "./Mobile";
import { teamMembers } from "@/Actions/team";
import toast from "react-hot-toast";
import Loading from "@/app/loading";

type User = {
  id: number;
  userName: string;
  email: string;
  avatar: string;
};

export default function UserTeam({ teamId }: { teamId: number }) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      const req = await teamMembers(teamId);
      setLoading(true);

      switch (req.status) {
        case "error":
          setUsers([]);
          setLoading(false);
          toast.error(req.message);
          break;
        case "success":
          setUsers(req.data);
          setLoading(false);
          break;
      }
    };
    request();
  }, []);

  return (
    <>
      {users &&
        users.map((user, index) => (
          <div
            key={index}
            className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-gray-400 border-white/10 rounded-xl"
          >
            <TeamDesktop user={user} onDelete={() => setDeleteOpen(true)} />

            <TeamMobile user={user} onDelete={() => setDeleteOpen(true)} />
          </div>
        ))}

      {loading && <Loading />}

      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          console.log("Delete");
          setDeleteOpen(false);
        }}
        title="حذف عضو از تیم"
        description="آیا مطمئن هستید؟"
        variant="danger"
      />
    </>
  );
}
