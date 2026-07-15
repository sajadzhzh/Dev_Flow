import { CalendarDay, CalendarEvent } from "./calendar.types";
import { CalendarDaysMonth } from "./calendar.utils";
import { Calendar, Clock3, FolderKanban } from "lucide-react";
import Link from "next/link";

interface EventPanelProps {
  day: CalendarDay | null;
  events: CalendarEvent[];
}

const priorityColor = {
  critical: "bg-[#8B5CF6]",
  high: "bg-[#3B82F6]",
  medium: "bg-[#F59E0B]",
  low: "bg-[#22C55E]",
};

export default function EventPanel({
  day,
  events,
}: EventPanelProps) {
  if (!day) {
    return (
      <div className="bg-[#18181B] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[420px]">
        <Calendar className="size-14 text-gray-600" />

        <h3 className="mt-4 text-lg font-semibold">
          یک روز را انتخاب کنید
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          برای مشاهده برنامه‌های آن روز روی یکی از روزهای تقویم کلیک کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#18181B] border border-white/10 rounded-xl p-5 min-h-[420px]">

      <div className="border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold">
          {day.day} {CalendarDaysMonth[day.month - 1]}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {events.length === 0
            ? "بدون برنامه"
            : `امروز ${events.length} برنامه دارید`}
        </p>
      </div>

      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">

          <Calendar className="size-12 text-gray-600" />

          <p className="mt-4 text-gray-500">
            برای این روز برنامه‌ای ثبت نشده است.
          </p>

        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-3">

          {events.map((event) => (
            <Link
              href={`/dashboard/tasks/${event.id}`}
              key={event.id}
              className="group rounded-xl border border-white/10 bg-[#202024] p-4 transition hover:border-[#3B82F6] hover:bg-[#252529]"
            >

              <div className="flex items-center gap-3">

                <span
                  className={`size-3 rounded-full ${priorityColor[event.priority]}`}
                />

                <h3 className="font-medium">
                  {event.title}
                </h3>

              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">

                <div className="flex items-center gap-2">

                  <FolderKanban className="size-4" />

                  <span>{event.projectName}</span>

                </div>

                <div className="flex items-center gap-2">

                  <Clock3 className="size-4" />

                  <span>{event.time}</span>

                </div>

              </div>

            </Link>
          ))}

        </div>
      )}
    </div>
  );
}