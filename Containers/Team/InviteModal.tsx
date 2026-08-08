"use client";

import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Input/Button";
import Modal from "@/Components/ui/Modal";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import TeamMobile from "./Item/Mobile";

export default function TeamInviteModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex gap-1 justify-center w-full lg:w-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white"
      >
        <UserPlus />
        دعوت عضو جدید
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>دعوت عضو جدید</Modal.Header>

        <Modal.Body>
          <div className="w-full flex flex-col gap-2">
            <SearchItems
              name="findUser"
              placeholder="جستجو بر اساس ایمیل و یا نام کاربری"
            />

            <div className="w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-gray-400 border-white/10 rounded-xl">
              <TeamMobile
                user={{
                  id: 1,
                  email: "asdasdasd",
                  userName: "asdasdasdasdafd",
                  avatar: "",
                }}
                invite
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
