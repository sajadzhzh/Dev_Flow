import ActivityChart from "@/Components/Layout/ActivityChart";
import CardItem from "@/Components/ui/CardItem";
import Card from "@/Components/ui/SmallCard";
import TaskTableItem from "@/Components/ui/TaskTableItem";
import { ChartLine, Clock, Folders, SquareCheck } from "lucide-react";
import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="flex flex-col justify-center gap-2 w-full h-max">
        <h2 className="text-2xl m-0">گزارش ها</h2>
        <p className="text-sm text-gray-400">نگاهی به عملکرد تیم و پروژه ها</p>
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
        <Card
          title="عملکرد کلی تیم"
          value={"84%"}
          icon={ChartLine}
          color="orange"
        />

        <Card title="کل پروژه ها" value={12} icon={Folders} color="blue" />

        <Card
          title="تسک های تکمیل شده"
          value={8}
          icon={SquareCheck}
          color="green"
        />

        <Card
          title="میانگین زمان انجام تسک"
          value={"2 ساعت"}
          icon={Clock}
          color="purple"
        />
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col">
        <div className="w-full flex gap-5 flex-col lg:flex-row">
          <div className="grow lg:w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-70 overflow-y-scroll scrollbar-none relative">
            <div className="w-full flex justify-between items-center text-sm text-gray-400 mb-4">
              فعالیت های اخیر
              <Link
                href="/dashboard/notification"
                className="p-1 px-2 rounded-xl bg-white/25 hover:bg-white/50 hover:text-gray-900"
              >
                مشاهده همه فعالیت ها
              </Link>
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
          </div>

          <div className="grow lg:w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 ps-10 h-70 flex flex-col items-center justify-center gap-2">
            نرخ تکمیل وظایف
            <ActivityChart
              data={[
                { day: "شنبه", value: 2 },
                { day: "یک", value: 5 },
                { day: "دو", value: 4 },
                { day: "سه", value: 8 },
                { day: "چهار", value: 6 },
                { day: "پنج", value: 10 },
                { day: "جمعه", value: 7 },
              ]}
            />
          </div>
        </div>

        <div className="grow border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-70 overflow-y-scroll scrollbar-none relative">
          <div className="w-full flex justify-between items-center text-sm text-gray-400 mb-4">
            پیشرفت پروژه‌ها
            <Link
              href="/dashboard/projects"
              className="p-1 px-2 rounded-xl bg-white/25 hover:bg-white/50 hover:text-gray-900"
            >
              مشاهده همه پروژه‌ها
            </Link>
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
        </div>
      </div>
    </div>
  );
}
