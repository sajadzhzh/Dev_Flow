"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Button from "@/Components/ui/Input/Button";
import Profile from "@/public/Profile.png";
import MenuItems from "./Items";
import MenuStatics from "./Statics";

interface HiddenMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function HiddenMenu({
  open,
  onClose,
}: HiddenMenuProps) {
  const { data: session } = useSession();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div
      className={`
        fixed inset-0 z-50
        bg-black/45 backdrop-blur-[2px]
        transition-opacity duration-200
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          h-full w-2/3 max-w-xs
          bg-[#0F0F14]
          py-8 px-3
          transition-transform duration-200
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Button
          className="mb-5 p-3 ps-0"
          onClick={onClose}
        >
          <X />
        </Button>

        <Button className="mb-3 flex w-full items-center gap-2 rounded-xl border border-gray-800 bg-[#27272760] p-2">
          <Image
            src={Profile}
            alt="Profile"
            width={40}
            height={40}
            loading="eager"
            className="rounded-full"
          />
          {session?.user?.name}
        </Button>

        <MenuItems onClose={onClose}/>
        <MenuStatics onClose={onClose}/>
      </div>
    </div>
  );
}