"use client";

import Button from "@/Components/ui/Input/Button";
import Modal from "@/Components/ui/Modal";
import { Pencil } from "lucide-react";
import { useState } from "react";
import TeamForm from "./TeamForm";

type Team = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
};

export default function TeamInfoModal({
  createTeam,
  team,
}: {
  team?: Team;
  createTeam?: boolean;
}) {
  const [open, setOpen] = useState(false);
  
    
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`flex gap-1 justify-center w-full ${!createTeam && "lg:w-max"} py-2 px-4 bg-[#8B5CF6] rounded-xl cursor-pointer hover:bg-[#9a71fa]`}
      >
        <Pencil size={18} />
        {createTeam ? "ایجاد تیم" : "ویرایش اطلاعات تیم"}
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          {createTeam ? "ایجاد تیم" : "ویرایش اطلاعات تیم"}
        </Modal.Header>

        <Modal.Body>
          <TeamForm createTeam={createTeam} />
        </Modal.Body>
      </Modal>
    </>
  );
}
