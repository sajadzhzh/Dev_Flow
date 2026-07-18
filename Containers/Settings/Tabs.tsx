"use client";

import {
  Bell,
  CalendarCog,
  Info,
  Palette,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const tabs = [
  { title: "اطلاعات حساب", value: null, icon: User },
  { title: "امنیت", value: "security", icon: ShieldCheck },
  { title: "ظاهر", value: "styles", icon: Palette },
  { title: "اعلان ها", value: "notifications", icon: Bell },
  { title: "درباره برنامه", value: "info", icon: Info },
];

export default function SettingsTabs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const view = searchParams.get("view");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="w-full flex flex-col gap-3">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const title = tab.title;
        const active = tab.value ? view === tab.value : !view;
        return (
          <Link
            key={index}
            href={
              tab.value
                ? pathname + "?" + createQueryString("view", tab.value)
                : pathname
            }
            className={`w-full flex gap-2 items-center py-2 px-3 rounded ${active ? "bg-[#3b83f665] text-[#3B82F6]" : "hover:bg-[#28282b]"}`}
          >
            <Icon />
            {title}
          </Link>
        );
      })}
    </div>
  );
}
