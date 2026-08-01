"use client";

import Button from "@/Components/ui/Input/Button";
import Modal from "@/Components/ui/Modal";
import { Pencil } from "lucide-react";
import { useState } from "react";
import SelectBox from "@/Components/ui/Input/Select";

export default function TeamInfoModal({
  createTeam,
}: {
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
          <form className="w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="teamName" className="text-[13px] w-max">
                نام تیم
              </label>
              <input
                type="text"
                name="teamName"
                id="teamName"
                className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="teamDescription" className="text-[13px] w-max">
                توضیحات تیم
              </label>
              <textarea
                rows={5}
                name="teamDescription"
                id="teamDescription"
                className="w-full border outline-0 border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
              />
            </div>

            {!createTeam && (
              <div className="flex flex-col gap-2">
                <label htmlFor="teamOwner" className="text-[13px] w-max">
                  مالک تیم
                </label>
                <SelectBox
                  name="teamOwner"
                  id="teamOwner"
                  values={["Sajadzhzh", "Amir"]}
                />
              </div>
            )}

            <Button
              type="submit"
              className="flex gap-1 justify-center w-full py-2 px-4 bg-[#8B5CF6] rounded-xl cursor-pointer hover:bg-[#9a71fa]"
            >
              ثبت
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
