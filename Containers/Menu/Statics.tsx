"use client"

import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuStatics(){
  const path = usePathname()
    return(
        <div className="flex flex-col gap-2">
          <Link href="/dashboard/settings" className={path.startsWith("/dashboard/settings")? "p-2 flex gap-2 items-center rounded-xl menu-item-active" : "p-2 flex gap-2 items-center rounded-xl"}>
            <Settings />
            تنظیمات
          </Link>
          <Link href="/dashboard/profile" className={path.startsWith("/dashboard/profile")? "p-2 flex gap-2 items-center rounded-xl menu-item-active" : "p-2 flex gap-2 items-center rounded-xl"}>
            <User />
            پروفایل
          </Link>
          <Link href="" className="p-2 flex gap-2 items-center rounded-xl text-red-500">
            <LogOut />
            خروج
          </Link>
        </div>
    )
}