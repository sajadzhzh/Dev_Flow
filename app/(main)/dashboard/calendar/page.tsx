import { Calendar } from "lucide-react";
import CalendarSelf from "@/Containers/Calendar/Calendar";

export default function CalendarPage() {
  return (
    <div className="w-full py-3 px-5 flex flex-col gap-3">
      <div className="w-full flex items-center">
        <div className="flex items-center gap-2">
          <Calendar />
          <div>
            <h3 className="text-xl">تقویم</h3>
            <p className="text-[13px] text-gray-500">
              برنامه های خود را پیگیری و مدیریت کنید
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <CalendarSelf />
      </div>
    </div>
  );
}
