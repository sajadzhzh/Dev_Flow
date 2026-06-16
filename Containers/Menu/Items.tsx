"use client"

import { Calendar, ChartNoAxesColumnIncreasing, Folder, House, SquareCheck, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems(){
  const path = usePathname()
    return(
        <div className="flex flex-col gap-2 border-b border-gray-800 pb-3 my-3">
          <Link href="/dashboard" className={path === "/dashboard" ? "p-2 flex gap-2 items-center rounded-xl menu-item-active" : "p-2 flex gap-2 items-center rounded-xl"}>
            <House />
            داشبورد
          </Link>
          <Link href="/dashboard/projects" className={path === "/dashboard/projects" ? "p-2 flex gap-2 items-center rounded-xl menu-item-active" : "p-2 flex gap-2 items-center rounded-xl"}>
            <Folder />
            پروژه‌ها
          </Link>
          <Link href="" className="p-2 flex gap-2 items-center rounded-xl">
            <SquareCheck />
            تسک‌ها
          </Link>
          <Link href="" className="p-2 flex gap-2 items-center rounded-xl">
            <Calendar />
            تقویم
          </Link>
          <Link href="" className="p-2 flex gap-2 items-center rounded-xl">
            <Users />
            تیم
          </Link>
          <Link href="" className="p-2 flex gap-2 items-center rounded-xl">
            <ChartNoAxesColumnIncreasing />
            گزارش ها
          </Link>
        </div>
    )
}