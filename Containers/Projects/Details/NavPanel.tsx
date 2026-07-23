"use client";

import Button from "@/Components/ui/Input/Button";
import { Activity, Folder, LayoutGrid, SquareCheck, Users } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function ProjectDetailsNavPanel({
  status,
}: {
  status: "active" | "suspend" | "done";
}) {
  const router = useRouter();
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

  const tabs = [
    { title: "نمای کلی", value: null, icon: LayoutGrid },
    { title: "تسک ها", value: "tasks", icon: SquareCheck },
    { title: "اعضا", value: "users", icon: Users },
    { title: "فایل ها", value: "files", icon: Folder },
    { title: "فعالیت ها", value: "activities", icon: Activity },
  ];

  return (
    <div className="w-full flex bg-[#18181B] rounded-xl border-b-2 border-gray-600">
      {status === "active" &&
        tabs.map((tab, index) => {
          const Icon = tab.icon;

          const active = tab.value ? view === tab.value : !view;

          return (
            <Button
              key={tab.title}
              onClick={() =>
                router.push(
                  tab.value
                    ? pathname + "?" + createQueryString("view", tab.value)
                    : pathname,
                )
              }
              className={`active-project w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]
      ${active ? "project-subMenu-active" : ""}
      ${index === 0 ? "rounded-s-xl" : ""}
  ${index === tabs.length - 1 ? "rounded-e-xl" : ""}
      `}
            >
              <Icon />
              {tab.title}
            </Button>
          );
        })}

      {status === "done" &&
        tabs.map((tab, index) => {
          const Icon = tab.icon;

          const active = tab.value ? view === tab.value : !view;

          return (
            <Button
              key={tab.title}
              onClick={() =>
                router.push(
                  tab.value
                    ? pathname + "?" + createQueryString("view", tab.value)
                    : pathname,
                )
              }
              className={`done-project w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]
        ${active ? "project-subMenu-active" : ""}
        ${index === 0 ? "rounded-s-xl" : ""}
  ${index === tabs.length - 1 ? "rounded-e-xl" : ""}
        `}
            >
              <Icon />
              {tab.title}
            </Button>
          );
        })}

      {status === "suspend" &&
        tabs.map((tab, index) => {
          const Icon = tab.icon;

          const active = tab.value ? view === tab.value : !view;

          return (
            <Button
              key={tab.title}
              onClick={() =>
                router.push(
                  tab.value
                    ? pathname + "?" + createQueryString("view", tab.value)
                    : pathname,
                )
              }
              className={`suspend-project w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]
      ${active ? "project-subMenu-active" : ""}
      ${index === 0 ? "rounded-s-xl" : ""}
      ${index === tabs.length - 1 ? "rounded-e-xl" : ""}
      `}
            >
              <Icon />
              {tab.title}
            </Button>
          );
        })}
    </div>
  );
}
