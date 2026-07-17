"use client";

import Image from "next/image";
import Profile from "@/public/Profile.png";
import { useSession } from "next-auth/react";
import { Calendar, Mail, MapPin, Pencil } from "lucide-react";
import Link from "next/link";

export default function UserCard() {
  const { data: session } = useSession();

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center border border-gray-600 rounded-xl py-4 px-6 relative bg-[#18181b]">
      <div className="userCard-gradiant absolute w-full h-full right-0 rounded-xl z-0 hidden lg:block"></div>
      <div className="w-full flex flex-col lg:flex-row gap-4 items-center z-10">
        <Image
          src={session?.user?.image || Profile}
          alt="Profile"
          width={1000}
          height={1000}
          loading="eager"
          className="size-40 rounded-full"
        />

        <div className="flex flex-col gap-4 items-center lg:items-start lg:max-w-130 grow">
          <h2 className="text-2xl">سجاد ژیانجو</h2>
          <h3 className="text-[14px] text-gray-500">{session?.user?.name}@</h3>
          <p className="text-[14px] text-gray-500 text-justify">
            علاقه منده به توسعه وب و ساخت تجربه های کاربری . عاشق کد نویسی و
            یادگیری تکنولوژی های جدید
          </p>
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <div className="lg:w-max px-3 py-2 flex items-center justify-center gap-2 bg-[#28282b] rounded text-[12px]">
              <Calendar size={18} />
              عضو از 1405/05/05
            </div>

            <div className="lg:w-max px-3 py-2 flex items-center justify-center gap-2 bg-[#28282b] rounded text-[12px]">
              <MapPin size={18} />
              ایران ، کرج
            </div>

            <div className="lg:w-max px-3 py-2 flex items-center justify-center gap-2 bg-[#28282b] rounded text-[12px]">
              <Mail size={18} />
              zhiyanjoo1382@gmail.com
            </div>
          </div>
        </div>

        <Link
          href=""
          className="py-2 bg-[#8B5CF6] hover:bg-[#9a71fa] flex items-center justify-center gap-2 text-[14px] w-full lg:w-1/6 rounded ms-auto mb-auto"
        >
          <Pencil size={18} />
          ویرایش پروفایل
        </Link>
      </div>
    </div>
  );
}
