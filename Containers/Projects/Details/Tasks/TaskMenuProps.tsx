"use client";

import Button from "@/Components/ui/Button";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { RefObject } from "react";

interface TaskMenuProps {
  open: boolean;
  onToggle: () => void;
  menuRef: RefObject<HTMLDivElement | null>;
}

const menus = [
  {
    title: "مشاهده جزئیات",
    href: "/dashboard/projects/1",
  },
  {
    title: "ویرایش پروژه",
    href: "",
  },
  {
    title: "مدیریت اعضا",
    href: "",
  },
  {
    title: "کپی لینک پروژه",
    href: "",
  },
  {
    title: "آرشیو پروژه",
    href: "",
  },
];

export default function TaskMenu({
  open,
  onToggle,
  menuRef,
}: TaskMenuProps) {
  return (
    <div ref={menuRef} className="relative">
      <Button
        onClick={onToggle}
        style="cursor-pointer p-1 bg-[#28282B] rounded-xl border border-gray-600 hover:bg-[#18181B]"
      >
        <EllipsisVertical />
      </Button>

      <div
        className={`absolute left-0 z-50 w-max flex-col rounded border border-gray-600 bg-[#18181B] ${
          open ? "flex" : "hidden"
        }`}
      >
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className="p-2 text-start text-sm text-gray-400 hover:bg-[#28282B] hover:text-white"
          >
            {menu.title}
          </Link>
        ))}

        <div className="border-b border-gray-600" />

        <Link
          href=""
          className="rounded p-2 text-start text-sm text-red-500 hover:bg-[#f508083a]"
        >
          حذف پروژه
        </Link>
      </div>
    </div>
  );
}