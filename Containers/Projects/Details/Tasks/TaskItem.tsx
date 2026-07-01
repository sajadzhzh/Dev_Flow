"use client";

import { Dot, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

type CardColor = "blue" | "green" | "red";

const variants = {
  blue: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    status: "درحال انجام",
  },
  green: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    status: "تکمیل",
  },
  red: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
    border: "border-[#EF4444]",
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

export default function TaskItem({
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
      className={`w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:${variant.border} rounded-xl ${ellipsis ? `${variant.border} bg-[#28282B]` : "border-white/10 bg-[#18181B]"}`}
    >
      <div className="hidden xl:flex items-center">
        <div className="w-3/9 flex gap-2 items-center">
          <div className={`${variant.text}`}>
            <Dot />
          </div>
          <h3>{title}</h3>
        </div>

        <div className="w-1/9 absolute right-[26%]">
          <div className={`py-1 px-2 w-max text-center text-sm ${variant.bg} ${variant.text} rounded-2xl`}>
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

        <div ref={menuRef} className="w-2/9 text-center relative">
          <Button
            style="cursor-pointer p-1 bg-[#28282B] rounded-xl border border-gray-600 hover:bg-[#18181B] "
            onClick={() => setEllipsis((prev) => !prev)}
          >
            <EllipsisVertical />
          </Button>

          <div
            className={`w-max bg-[#18181B] border border-gray-600 rounded absolute left-0 flex-col z-999 ${ellipsis ? "flex" : "hidden"}`}
          >
            <Link
              href="/dashboard/projects/1"
              className="p-2 text-start text-sm text-gray-500 hover:text-white hover:bg-[#28282B] rounded"
            >
              مشاهده جزئیات
            </Link>
            <Link
              href=""
              className="p-2 text-start text-sm text-gray-500 hover:text-white hover:bg-[#28282B] rounded"
            >
              ویرایش پروژه
            </Link>
            <Link
              href=""
              className="p-2 text-start text-sm text-gray-500 hover:text-white hover:bg-[#28282B] rounded"
            >
              مدیریت اعضا
            </Link>
            <Link
              href=""
              className="p-2 text-start text-sm text-gray-500 hover:text-white hover:bg-[#28282B] rounded"
            >
              کپی لینک پروژه
            </Link>
            <Link
              href=""
              className="p-2 text-start text-sm text-gray-500 hover:text-white hover:bg-[#28282B] rounded"
            >
              آرشیو پروژه
            </Link>
            <div className="border-b border-gray-600"></div>
            <Link
              href=""
              className="p-2 text-start text-sm text-red-500 hover:bg-[#f508083a] rounded"
            >
              حذف پروژه
            </Link>
          </div>
        </div>
      </div>

      {/* <Link href="" className="flex gap-4 flex-col xl:hidden">
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
      </Link> */}
    </div>
  );
}
