import DropdownMenu from "@/Components/ui/DropDownMenu";
import { Dot } from "lucide-react";
import { ReactNode } from "react";

type Status = "inProccess" | "done" | "waiting" | "suspend";

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



interface TaskProps {
  title: ReactNode;
  project?: string;
  priority?: "حیاتی" | "بالا" | "متوسط" | "پائین";
  date: string;
  Status: Status;
  onEdit: string;
  onDelete: () => void;
}

export default function TaskItemMyTasks({
  title,
  project,
  priority,
  date,
  Status,
  onEdit,
  onDelete
}: TaskProps) {
  const variant = variants[Status];
  let pColor;

  switch (priority) {
    case "حیاتی":
      pColor = "text-[#8B5CF6]";
      break;
    case "بالا":
      pColor = "text-[#EF4444]";
      break;
    case "متوسط":
      pColor = "text-[#F59E0B]";
      break;
    case "پائین":
      pColor = "text-[#22C55E]";
      break;
    default:
      pColor = "";
  }

  const menus = [
  {
    title: "مشاهده جزئیات",
    href: "/dashboard/projects/1/tasks/1",
  },
  {
    title: "ویرایش",
    href: onEdit,
  },
  {
    dividerBefore: true,
    title: "حذف پروژه",
    danger: true,
    onClick: onDelete
  },
];
  return (
    <>
      <div className="hidden xl:flex items-center">
        <div className="w-3/9 flex gap-2 items-center">
          <div className={`${variant.text}`}>
            <Dot />
          </div>
          <h3>{title}</h3>
        </div>

        <div className="w-2/9 text-center">{project}</div>

        <div
          className={`w-1/9 flex justify-center items-center gap-2 ${pColor}`}
        >
          {priority}
        </div>

        <div className="w-1/9 flex items-center justify-center">{date}</div>

        <div className="w-1/9 flex items-center justify-center">
          <div
            className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl`}
          >
            {variant.status}
          </div>
        </div>

        <div className="w-1/9 text-center">
          <DropdownMenu items={menus} />
        </div>
      </div>

      <div className="flex flex-col gap-2 xl:hidden w-full">
        <div className="flex w-full justify-between items-center">
          <div className={`flex justify-center items-center gap-2 ${pColor}`}>
            {priority}
          </div>

          <div className="flex items-center justify-center">{date}</div>
        </div>

        <h3>{title}</h3>
        <div className="flex w-full justify-between items-center">
          <div className="text-sm text-gray-500">{project}</div>

          <div className="flex items-center justify-center">
            <div
              className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl`}
            >
              {variant.status}
            </div>
          </div>
        </div>
        <DropdownMenu
          items={menus}
          trigger={"عملیات"}
          buttonClassName="w-full text-center"
        />
      </div>
    </>
  );
}
