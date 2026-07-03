"use client";

import Image from "next/image";
import Profile from "@/public/Profile.png";
import { useEffect, useRef, useState } from "react";
import DropdownMenu, { DropdownItem } from "../../../../Components/ui/DropDownMenu";

type Role = "supervisor" | "developer" | "manager";
type Status = "active" | "inactive";

const variants = {
  supervisor: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    hover: "hover:border-[#3B82F6]",
    label: "مدیر پروژه",
  },
  developer: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    hover: "hover:border-[#22C55E]",
    label: "توسعه دهنده",
  },
  manager: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#EF4444]",
    hover: "hover:border-[#EF4444]",
    label: "ناظر",
  },
};

interface UserRowProps {
  name: string;
  date: string;
  email: string;
  label: Role;
  status: Status;
  menus: DropdownItem[];
}


export default function UserRow({
  name,
  date,
  email,
  label,
  status,
  menus
}: UserRowProps) {
  const variant = variants[label];

  return (
    <div
      className={`w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] ${variant.hover} rounded-xl border-white/10 `}
    >
      <div className="hidden xl:flex items-center">
        <div className="w-3/11 flex gap-2 items-center">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
          <h3>{name}</h3>
        </div>

        <div className="w-1/11">
          <div
            className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl mx-auto`}
          >
            {variant.label}
          </div>
        </div>

        <div className="w-3/11 flex justify-center items-center gap-2">
          {email}
        </div>

        <div className="w-1/11 text-center">{date}</div>

        <div className="w-1/11 text-center">
          {status === "active" ? (
            <div className="w-max mx-auto rounded-xl text-sm flex items-center bg-[#22c55e4d] text-[#22C55E] px-2 py-1">
              فعال
            </div>
          ) : (
            <div className="w-max mx-auto rounded-xl text-sm flex items-center bg-[#ef44444d] text-[#EF4444] px-2 py-1">
              غیر فعال
            </div>
          )}
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
            <h3>{name}</h3>
            <p className="text-sm text-gray-500">{variant.label}</p>
          </div>
        </div>

        <DropdownMenu items={menus} />
      </div>
    </div>
  );
}
