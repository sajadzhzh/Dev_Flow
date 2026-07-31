import Image from "next/image";
import Profile from "@/public/Profile.png";
import { Dot } from "lucide-react";
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
  priority?: "حیاتی" | "بالا" | "متوسط" | "پائین";
  date: string;
  Status: Status;
  onEdit: string;
  onDelete: () => void;
}

export default function TaskItemDesktop({
  Status,
  title,
  priority,
  date,
  onDelete,
  onEdit
}: TaskProps) {
  const variant = variants[Status];
  return (
    <div className="hidden xl:flex items-center relative">
      <div className="w-3/9 flex gap-2 items-center">
        <div className={`${variant.text}`}>
          <Dot />
        </div>
        <h3>{title}</h3>
      </div>

      <div className="w-1/9 absolute right-[26%]">
        <div
          className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl`}
        >
          {variant.status}
        </div>
      </div>

      <div className="w-1/9 flex justify-center items-center gap-2">
        {priority}
      </div>

      <div className="w-1/9 flex items-center justify-center">
        <Image
          src={Profile}
          alt="Profile"
          width={1000}
          height={1000}
          loading="eager"
          className="size-10 rounded-full"
        />
      </div>

      <div className="w-2/9 text-center">{date}</div>

      <div className="w-2/9 text-center">
        <TaskActions onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}
