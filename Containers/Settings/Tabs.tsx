import { Bell, CalendarCog, ChevronLeft, Info, Palette, ShieldCheck, User } from "lucide-react";
import Link from "next/link";

export default function SettingsTabs() {
  return (
    <div className="w-full flex flex-col gap-3">
      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <User />
        اطلاعات حساب
      </Link>
      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <ShieldCheck />
        امنیت
      </Link>

      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <Palette />
        ظاهر
      </Link>

      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <Bell />
        اعلان ها
      </Link>

      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <CalendarCog />
        تنظیمات تقویم
      </Link>

      <Link
        href=""
        className="w-full flex gap-2 items-center hover:bg-[#28282b] py-2 px-3 rounded"
      >
        <Info />
        درباره برنامه
      </Link>


    </div>
  );
}
