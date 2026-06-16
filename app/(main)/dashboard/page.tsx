"use client";
import CardItem from "@/Components/ui/CardItem";
import Card from "@/Components/ui/SmallCard";
import TaskTableItem from "@/Components/ui/Tasktableitem";
import { LayoutGrid } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div className="w-full flex flex-col gap-5 p-5">
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="flex items-center justify-end gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          <div className="text-sm m-0">Dashboard</div>
          <LayoutGrid className="text-blue-700" />
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <h2 className="text-2xl m-0">سلام {session?.user?.name} ! 👋</h2>
          <p className="text-sm text-gray-400">
            آماده‌ایی تا روز فوق‌العاده‌ایی بسازی؟
          </p>
        </div>
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
        <Card type="project">پروژه‌ها</Card>
        <Card type="team">اعضای تیم</Card>
        <Card type="task">تسک‌ها</Card>
        <Card type="report">تسک‌های امروز</Card>
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
        <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 relative">
          <div className="w-full text-sm text-gray-400 mb-5">
            فعالیت های اخیر
          </div>

          <div className="mb-3">
            <TaskTableItem
              name="تسک جدیدی در پروژه طراحی سایت فروشگاهی اضافه شد"
              priority="critical"
            />
            <TaskTableItem
              name="تسک جدیدی در پروژه طراحی سایت فروشگاهی اضافه شد"
              priority="high"
            />
            <TaskTableItem
              name="تسک جدیدی در پروژه طراحی سایت فروشگاهی اضافه شد"
              priority="mid"
            />
            <TaskTableItem
              name="تسک جدیدی در پروژه طراحی سایت فروشگاهی اضافه شد"
              priority="low"
            />
          </div>

          <div className="w-full text-sm flex justify-end text-gray-400 mt-5">
            <Link
              href=""
              className="p-1 px-2 absolute bottom-3 left-3 rounded-xl bg-white/25 hover:bg-white/50 hover:text-gray-900"
            >
              مشاهده همه فعالیت ها
            </Link>
          </div>
        </div>

        <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-max relative">
          <div className="w-full text-sm text-gray-400 mb-5">
            پیشرفت پروژه‌ها
          </div>

          <div className="mb-3">
            <CardItem
              priority="critical"
              name="طراحی سایت فروشگاهی"
              lastUpdate="2"
              percent={50}
            />
            <CardItem
              priority="high"
              name="طراحی سایت فروشگاهی"
              lastUpdate="2"
              percent={50}
            />
            <CardItem
              priority="mid"
              name="طراحی سایت فروشگاهی"
              lastUpdate="2"
              percent={50}
            />
            <CardItem
              priority="low"
              name="طراحی سایت فروشگاهی"
              lastUpdate="2"
              percent={50}
            />
          </div>

          <div className="w-full text-sm flex justify-end text-gray-400 mt-5">
            <Link
              href=""
              className="p-1 px-2 absolute bottom-3 left-3 rounded-xl bg-white/25 hover:bg-white/50 hover:text-gray-900"
            >
              مشاهده همه پروژه‌ها
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full border border-gray-600 rounded-xl py-3 px-5 bg-[#18181B]">
          <div className="w-full flex flex-wrap justify-center items-center gap-3 border-b border-gray-800 p-2">
            <div className="border-2 rounded border-[#8B5CF6]"></div>
            <p className="text-sm">بررسی و تایید رابط کاربری</p>

            <div className="ms-3 px-3 py-1 text-small bg-[#3b83f63a] text-[#3B82F6] border border-[#3B82F6] rounded-2xl">
              طراحی سایت
            </div>
            <div className="ms-auto me-10 px-3 py-1 text-small bg-[#8a5cf634] text-[#8B5CF6] border border-[#8B5CF6] rounded-2xl">
              الویت حیاتی
            </div>
          </div>
      </div>
    </div>
  );
}
