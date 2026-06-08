import IntroHeader from "@/Components/Layout/IntroHeader";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-svh bg-main">
      <div className="overlay">
        <div className="container py-4 mx-auto">
        <IntroHeader />
      </div>
      <div className="w-3/4 mt-40 mb-8 mx-auto flex items-center justify-center text-3xl text-center">
        هم‌افزا یک نرم‌افزار کنترل و مدیریت برای کارهای روزمره، پروژه‌های کاری و
        درسی و ... به صورت انفرادی و تیمی می‌باشد که توسط تیم جوان ایرانی طراحی
        و به مرحله اجرا رسیده است.
      </div>

      <Link
        href="/auth"
        className="flex items-center w-max mx-auto h-max my-auto gap-1 border rounded px-4 py-1 hover:bg-white/50 hover:text-black"
      >
        <LogIn />
        ورود به حساب کاربری
      </Link>
      </div>
    </div>
  );
}
