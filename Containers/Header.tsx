"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Profile from "@/public/Profile.png";
import SearchHeader from "@/Components/Layout/GlobalSearch";
import Button from "@/Components/ui/Input/Button";
import { Bell, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import HiddenMenu from "./Menu/Hidden";

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  

  const pushRoute = (route: string) => {
    router.push(route);
  };

  return (
    <div className="w-full py-3 px-6 flex justify-between items-center">
      <Button
        className="cursor-pointer relative block lg:hidden"
        onClick={() => setMenuOpen(true)}
      >
        <Menu />
      </Button>

      <HiddenMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

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

      <div className="hidden lg:block w-1/3">
        <SearchHeader />
      </div>

      <div className="flex items-center gap-5">
        <Button
          onClick={() => pushRoute("/dashboard/notification")}
          className="cursor-pointer relative hover:text-[#3B82F6]"
        >
          <Bell />
          <div className="text-white px-1.5 pt-0.5 rounded-full text-small absolute -top-3 -right-2 bg-[#3B82F6]">
            2
          </div>
        </Button>

        <div className="border-s hidden lg:block border-gray-800 h-8"></div>

        <Link href="/dashboard/profile" className="hidden lg:flex ps-3 items-center gap-2 hover:bg-white/25 rounded-full">
          {session?.user?.name}
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}
