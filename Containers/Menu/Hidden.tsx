"use client";

import Button from "@/Components/ui/Button";
import { hiddenMenu } from "@/Lib/Helper/Events";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import Profile from "@/public/Profile.png";
import Image from "next/image";
import MenuItems from "./Items";
import MenuStatics from "./Statics";

export default function HiddenMenu() {
  const { data: session } = useSession();
  return (
    <div
      className="absolute hidden h-svh bg-black/45 backdrop-blur-[2px] z-40"
      id="hidden_menu_con"
    >
      <div
        className="w-0 h-full bg-[#0F0F14] z-50 py-8 px-3 overflow-x-hidden text-nowrap"
        id="hidden_menu"
      >
        <Button style="cursor-pointer p-3 ps-0 mb-5" onClick={hiddenMenu}>
          <X />
        </Button>

        <Button style="cursor-pointer mb-3 flex items-center gap-2 border border-gray-800 bg-[#27272760] rounded-xl p-2 w-full">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />
          {session?.user?.name}
        </Button>

        <MenuItems />

        <MenuStatics />
      </div>
    </div>
  );
}
