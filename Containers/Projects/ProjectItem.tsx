"use client";

import { Box } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import Profile2 from "@/public/smoke.png";
import Link from "next/link";
import DropdownMenu from "@/Components/ui/DropDownMenu";

const menus = [
  {
    title: "مشاهده جزئیات",
    href: "/dashboard/projects/1",
  },
  {
    title: "ویرایش",
    onClick: () => console.log("edit"),
  },
  {
    title: "مدیریت اعضا",
    href: "/dashboard/projects/1?view=users",
  },
  {
    title: "کپی لینک",
    onClick: () => {
      navigator.clipboard.writeText(window.location.href);
    },
  },
  {
    dividerBefore: true,
    title: "حذف پروژه",
    danger: true,
    onClick: () => {
      console.log("delete");
    },
  },
];

export default function ProjectItem() {
  return (
    <div
      className={`w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-[#3B82F6] border-white/10 rounded-xl`}
    >
      <div className="hidden xl:flex items-center">
        <div className="w-3/10 flex gap-2 items-center">
          <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
            <Box />
          </div>
          <div>
            <h3>طراحی سایت فروشگاهی</h3>
            <p className="text-small text-gray-500">لورم ایپسوم</p>
          </div>
        </div>

        <div className="w-1/10">
          <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
            در حال انجام
          </div>
        </div>

        <div className="w-1/10 flex items-center gap-2">
          <p>75%</p>
          <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
            <div className="border-b-4 border-[#3B82F6] rounded-xl w-[75%] absolute"></div>
          </div>
        </div>

        <div className="w-2/10 flex items-center justify-center">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
          <Image
            src={Profile2}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full translate-x-3"
          />
          +2
        </div>

        <div className="w-1/10 text-center">1405/04/05</div>

        <div className="w-1/10 text-center">1405/05/05</div>

        <div className="w-1/10 text-end relative">
          <DropdownMenu items={menus} />
        </div>
      </div>

      <Link href="" className="flex gap-4 flex-col xl:hidden">
        <div className="w-full flex gap-2 items-center">
          <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
            <Box />
          </div>
          <div>
            <h3>طراحی سایت فروشگاهی</h3>
            <p className="text-small text-gray-500">لورم ایپسوم</p>
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
            <div className="border-b-4 border-[#3B82F6] rounded-xl w-[75%] absolute"></div>
          </div>
          <p>75%</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-1/10">
            <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              در حال انجام
            </div>
          </div>

          <div className="w-2/10 flex items-center justify-center">
            <Image
              src={Profile}
              alt="Profile"
              width={1000}
              height={1000}
              loading="eager"
              className="size-10 rounded-full"
            />
            <Image
              src={Profile2}
              alt="Profile"
              width={1000}
              height={1000}
              loading="eager"
              className="size-10 rounded-full translate-x-3"
            />
            +2
          </div>
        </div>
      </Link>
    </div>
  );
}
