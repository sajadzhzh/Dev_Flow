"use client";
import CardItem from "@/Components/ui/CardItem";
import Card from "@/Components/ui/SmallCard";
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
        <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5"></div>
        <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-max">
          <div className="w-full text-sm text-gray-400 mb-5">
            پیشرفت پروژه‌ها
          </div>

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

          <div className="w-full text-sm flex justify-end text-gray-400 mt-5">
            <Link href="" className="p-1 px-2 rounded-xl bg-white/25 hover:bg-white/50 hover:text-gray-900">مشاهده همه پروژه‌ها</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
