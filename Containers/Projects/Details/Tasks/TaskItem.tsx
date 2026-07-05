"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import { ReactNode } from "react";
import DropdownMenu from "../../../../Components/ui/DropDownMenu";

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

const menus = [
  {
    title: "مشاهده جزئیات",
    href: "/dashboard/projects/1",
  },
  {
    title: "ویرایش",
    onClick: () => console.log("edit"),
  },
  {
    title: "مدیریت اعضا",
    href: "/dashboard/projects/1?view=users",
  },
  {
    title: "کپی لینک",
    onClick: () => {
      navigator.clipboard.writeText(window.location.href);
    },
  },
  {
    dividerBefore: true,
    title: "حذف پروژه",
    danger: true,
    onClick: () => {
      console.log("delete");
    },
  },
];

interface TaskProps {
  title: ReactNode;
  project?: string;
  priority?: "حیاتی" | "بالا" | "متوسط" | "پائین";
  myTasks?: boolean;
  date: string;
  owner: string;
  Status: Status;
}

export default function TaskRow({
  title,
  project,
  myTasks,
  priority,
  date,
  owner,
  Status,
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

  return (
    <div
      className={`w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] ${variant.hover} rounded-xl border-white/10`}
    >
      {!myTasks && (
        <>
          <div className="hidden xl:flex items-center">
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
              <DropdownMenu items={menus} />
            </div>
          </div>

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

            <DropdownMenu items={menus} />
          </div>
        </>
      )}

      {myTasks && (
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
              <div
                className={`flex justify-center items-center gap-2 ${pColor}`}
              >
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
      )}
    </div>
  );
}
