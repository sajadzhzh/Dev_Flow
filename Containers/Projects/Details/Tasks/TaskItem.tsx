"use client";

import { Dot } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import { ReactNode, useEffect, useRef, useState } from "react";
import TaskMenu from "./TaskMenuProps";

type CardColor = "blue" | "green" | "red";

const variants = {
  blue: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    hover: "hover:border-[#3B82F6]",
    status: "درحال انجام",
  },
  green: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    hover: "hover:border-[#22C55E]",
    status: "تکمیل",
  },
  red: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#EF4444]",
    hover: "hover:border-[#EF4444]",
    status: "متوقف",
  },
};

interface TaskProps {
  title: ReactNode;
  priority?: "حیاتی" | "بالا" | "متوسط" | "پائین";
  date: string;
  owner: string;
  color: CardColor;
}

export default function TaskRow({
  title,
  priority,
  date,
  owner,
  color,
}: TaskProps) {
  const [ellipsis, setEllipsis] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const variant = variants[color];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setEllipsis(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] ${variant.hover} rounded-xl ${ellipsis ? `${variant.border} bg-[#28282B]` : "border-white/10 bg-[#18181B]"}`}
    >
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
          <TaskMenu
            open={ellipsis}
            onToggle={() => setEllipsis((prev) => !prev)}
            menuRef={menuRef}
          />
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

        <TaskMenu
          open={ellipsis}
          onToggle={() => setEllipsis((prev) => !prev)}
          menuRef={menuRef}
        />
      </div>
    </div>
  );
}
