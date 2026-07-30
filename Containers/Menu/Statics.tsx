"use client";

import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuStatics({ onClose }: { onClose: () => void }) {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/dashboard/settings"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/settings")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <Settings />
        تنظیمات
      </Link>
      <Link
        href="/dashboard/profile"
        onClick={onClose}
        className={
          path.startsWith("/dashboard/profile")
            ? "p-2 flex gap-2 items-center rounded-xl menu-item-active"
            : "p-2 flex gap-2 items-center rounded-xl hover:bg-[#18181b]"
        }
      >
        <User />
        پروفایل
      </Link>
      <Link
        href=""
        onClick={onClose}
        className="p-2 flex gap-2 items-center rounded-xl text-red-500 hover:bg-[#ef44444d]"
      >
        <LogOut />
        خروج
      </Link>
    </div>
  );
}
