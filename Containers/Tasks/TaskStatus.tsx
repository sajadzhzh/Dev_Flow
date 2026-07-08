import { Bell, Calendar, ClipboardPen, Flag, Folder, User, UserStar } from "lucide-react";

export default function TaskStatus() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Folder />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">پروژه</p>
          <p className="text-sm">هم‌افزا</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <User />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">مسئول انجام</p>
          <p className="text-sm">sajadzhzh</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <UserStar />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">ناظر</p>
          <p className="text-sm">amir</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <Flag />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">اولویت</p>
          <p className="text-sm text-[#8B5CF6]">حیاتی</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <ClipboardPen />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">وضعیت</p>
          <p className="text-sm text-[#22C55E]">در حال انجام</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <Calendar />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">تاریخ شروع</p>
          <p className="text-sm">1405/05/05</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <Calendar />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">مهلت انجام ( سررسید )</p>
          <p className="text-sm">1405/06/05</p>
        </div>
      </div>
      <div className="border-b border-gray-600"></div>
      <div className="flex items-center gap-3">
        <Bell />
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-gray-500">یادآوری</p>
          <p className="text-sm">یک روز قبل از سررسید</p>
        </div>
      </div>
    </>
  );
}
