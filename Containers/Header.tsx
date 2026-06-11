"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Profile from "@/public/Profile.png";
import SearchHeader from "@/Components/Layout/SearchHeader";
import Button from "@/Components/ui/Button";
import { Bell, ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="w-full py-3 px-6 flex justify-between items-center">
      <Link href="/dashboard" className="flex items-center gap-2 text-xl">
        <Image
          src={Logo}
          alt="DevFlow"
          width={500}
          height={500}
          loading="eager"
          className="w-15 h-10"
        />
        هم‌افزا
      </Link>

      <div className="w-1/3">
        <SearchHeader />
      </div>

      <div className="flex items-center gap-5">
        <Button style="cursor-pointer relative">
          <Bell />
          <div className="px-1.5 pt-0.5 rounded-full text-small absolute -top-3 -right-2 bg-blue-700">
            2
          </div>
        </Button>

        <div className="border-s border-gray-800 h-8"></div>

        <Button style="cursor-pointer flex items-center gap-2 hover:bg-white/25 rounded-full">
          <ChevronDown />
          {session?.user?.name}
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
        </Button>
      </div>
    </div>
  );
}
