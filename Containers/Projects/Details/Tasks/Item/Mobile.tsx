import Image from "next/image";
import Profile from "@/public/Profile.png";
import { ReactNode } from "react";
import TaskActions from "./Actions";

const variants = {
  inProccess: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    hover: "hover:border-[#3B82F6]",
    status: "درحال انجام",
  },
  waiting: {
    bg: "bg-[#f59f0b62]",
    text: "text-[#F59E0B]",
    border: "border-[#F59E0B]",
    hover: "hover:border-[#F59E0B]",
    status: "در انتظار بررسی",
  },
  done: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    hover: "hover:border-[#22C55E]",
    status: "تکمیل",
  },
  suspend: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#EF4444]",
    hover: "hover:border-[#EF4444]",
    status: "متوقف",
  },
};

type Status = "inProccess" | "done" | "waiting" | "suspend";

interface TaskProps {
  title: ReactNode;
  date: string;
  Status: Status;
  onEdit: string;
  onDelete: () => void;
}

export default function TaskItemMobile({
  Status,
  title,
  date,
  onDelete,
  onEdit,
}: TaskProps) {
  const variant = variants[Status];
  return (
    <div
      className={`flex gap-4 items-center xl:hidden w-full border-b ${variant.border}`}
    >
      <div className="w-11/12 flex gap-2 items-center">
        <div className="p-3">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <TaskActions onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
