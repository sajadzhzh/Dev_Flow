"use client"

import Image from "next/image";
import Profile from "@/public/Profile.png";
import { useSession } from "next-auth/react";

export default function UserCard() {
    const { data: session } = useSession();
    
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-center border border-gray-600 rounded-xl py-4 px-6 relative bg-[#18181b]">
      <div className="userCard-gradiant absolute w-full h-full right-0 rounded-xl z-0"></div>
      <div className="flex flex-col lg:flex-row gap-4 items-center z-10">
        <Image
          src={session?.user?.image || Profile}
          alt="Profile"
          width={1000}
          height={1000}
          loading="eager"
          className="size-40 rounded-full"
        />

        <div className="flex">

        </div>
      </div>
    </div>
  );
}
