"use client";

import { Box, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import Profile2 from "@/public/smoke.png";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectItem() {
  const [ellipsis, setEllipsis] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      className={`w-full py-3 px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] hover:border-[#3B82F6] rounded-xl ${ellipsis ? "border-[#3B82F6] bg-[#28282B]" : "border-white/10 bg-[#18181B]"}`}
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

        <div ref={menuRef} className="w-1/10 text-end relative">
          <Button
            style="cursor-pointer p-1 bg-[#28282B] rounded-xl border border-gray-600 hover:bg-[#18181B]"
            onClick={() => setEllipsis((prev) => !prev)}
          >
            <EllipsisVertical />
          </Button>

          <div
            className={`w-max bg-[#18181B] border border-gray-600 rounded absolute left-0 flex-col z-50 ${ellipsis ? "flex" : "hidden"}`}
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
