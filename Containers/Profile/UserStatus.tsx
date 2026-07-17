import CardItem from "@/Components/ui/CardItem";
import Link from "next/link";
import TaskTableItem from "@/Components/ui/TaskTableItem";

export default function UserStatus() {
  return (
    <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
      <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-110 overflow-y-scroll scrollbar-none relative">
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

      <div className="grow lg:max-w-1/2 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5 h-110 overflow-y-scroll scrollbar-none relative">
        <div className="w-full flex justify-between items-center text-sm text-gray-400 mb-4">
          فعالیت های اخیر
          <Link
            href=""
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
    </div>
  );
}
