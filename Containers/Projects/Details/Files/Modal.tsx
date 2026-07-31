"use client";

import Button from "@/Components/ui/Input/Button";
import InputFile from "@/Components/ui/Input/file";
import Modal from "@/Components/ui/Modal";
import { UserPlus } from "lucide-react";
import { useState } from "react";

export default function FileModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 grow justify-center w-full lg:w-max py-2 px-5 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white"
      >
        <UserPlus />
        فایل جدید
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>آپلود فایل جدید</Modal.Header>

        <Modal.Body>
          <form className="flex flex-col gap-5">
            <InputFile />

            <Button
              type="submit"
              className="flex items-center gap-1 grow justify-center w-full lg:w-max py-2 px-5 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white"
            >
              ارسال
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
