"use client";

import { useState } from "react";

import Dialog from "@/Components/ui/Dialog";
import TeamDesktop from "./Desktop";
import TeamMobile from "./Mobile";

export default function UserTeam() {
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <div className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-gray-400 border-white/10 rounded-xl">
        <TeamDesktop onDelete={() => setDeleteOpen(true)} />

        <TeamMobile onDelete={() => setDeleteOpen(true)} />
      </div>

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
