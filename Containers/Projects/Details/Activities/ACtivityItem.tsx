"use client";

import Image from "next/image";
import Profile from "@/public/Profile.png";

interface ActivityRowProps {
  title: string;
  subTitle: string;
  date: string;
}

export default function ActivityRow({
  title,
  subTitle,
  date,
}: ActivityRowProps) {
  return (
    <div className="w-full py-3 relative px-5 bg-[#18181B] border xl:bg-none hover:bg-[#28282B] rounded-xl border-white/10">
      <div className="flex flex-col lg:flex-row  lg:items-center">
          <div className="flex lg:w-7/8 gap-5 order-2 lg:order-1">
            <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />

        <div className="w-6/8 flex flex-col gap-2">
          <h3>{title}</h3>
          <div className="text-gray-500 w-max text-sm rounded-2xl">{subTitle}</div>
        </div>
          </div>

        <div className="lg:w-1/8 text-[12px] lg:text-sm text-end lg:ms-auto order-1 lg:order-2">{date}</div>
      </div>
    </div>
  );
}
