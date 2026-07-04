"use client";

import Image from "next/image";
import Profile from "@/public/Profile.png";
import DropdownMenu, { DropdownItem } from "../../../../Components/ui/DropDownMenu";

type Priority = "high" | "mid" | "low"

const variants = {
  mid: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    hover: "hover:border-[#3B82F6]",
  },
  low: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    hover: "hover:border-[#22C55E]",
  },
  high: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#EF4444]",
    hover: "hover:border-[#EF4444]",
  },
};

interface UserRowProps {
  fileName: string;
  type: string;
  volume: string;
  date: string;
  priority: Priority;
  menus: DropdownItem[];
}


export default function FileRow({
  fileName,
  type,
  volume,
  date,
  priority,
  menus
}: UserRowProps) {
  const variant = variants[priority];

  return (
    <div
      className={`w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] ${variant.hover} rounded-xl border-white/10 `}
    >
      <div className="hidden xl:flex items-center">
        <div className="w-3/11 flex gap-2 items-center">
          
          <h3>{fileName}</h3>
        </div>

        <div className="w-1/11">
          <div
            className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl mx-auto`}
          >
            {type}
          </div>
        </div>

        <div className="w-1/11 flex justify-center items-center gap-2">
          {volume}
        </div>

        <div className="w-2/11 text-center">{date}</div>

        <div className="w-2/11">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full mx-auto"
          />
        </div>

        <div className="w-2/11 text-center">
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
            <h3>{fileName}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
        </div>

        <DropdownMenu items={menus} />
      </div>
    </div>
  );
}
