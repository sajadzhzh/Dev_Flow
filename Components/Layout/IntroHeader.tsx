"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";

export default function IntroHeader() {
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-between">
      <Link href="/" className="flex items-center gap-2 text-xl">
        <Image
          src={Logo}
          alt="DevFlow"
          width={500}
          height={500}
          loading="eager"
          className="w-20 h-15"
        />
        هم‌افزا
      </Link>

      {session?.user ? (
        <Link
          href="/dashboard"
          className="flex items-center h-max my-auto gap-1 border rounded px-4 py-1 hover:bg-white/50 hover:text-black"
        >
          <LogIn />
          داشبورد
        </Link>
      ) : (
        <Link
          href="/auth"
          className="flex items-center h-max my-auto gap-1 border rounded px-4 py-1 hover:bg-white/50 hover:text-black"
        >
          <LogIn />
          ورود
        </Link>
      )}
    </div>
  );
}
