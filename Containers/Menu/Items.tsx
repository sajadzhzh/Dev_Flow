"use client";

import {
  Calendar,
  ChartNoAxesColumnIncreasing,
  Folder,
  House,
  SquareCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems({ onClose }: { onClose: () => void }) {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-2 border-b border-gray-800 pb-3 my-3">
      <Link
        href="/dashboard"
        onClick={onClose}
        className={
          path === "/dashboard"
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <House />
        داشبورد
      </Link>
      <Link
        href="/dashboard/projects"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/projects")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <Folder />
        پروژه‌های من
      </Link>
      <Link
        href="/dashboard/tasks"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/tasks")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <SquareCheck />
        تسک‌های من
      </Link>
      <Link
        href="/dashboard/calendar"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/calendar")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <Calendar />
        تقویم
      </Link>
      <Link
        href="/dashboard/team"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/team")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <Users />
        تیم
      </Link>
      <Link
        href="/dashboard/reports"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/reports")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <ChartNoAxesColumnIncreasing />
        گزارش ها
      </Link>
    </div>
  );
}
