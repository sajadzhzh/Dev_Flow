import { getRemainingDays } from "@/Lib/Helper/Date";

export default function ProjectDates() {
  const remainingDays = getRemainingDays("2026/07/30");

  return (
    <div className="w-full flex flex-col gap-1">
      <h3 className="mb-1">تاریخ های مهم</h3>
      <div className="border border-gray-600 hover:-translate-y-0.5 rounded py-2 px-5 flex justify-between">
        <p className="text-sm">تاریخ شروع پروژه</p>
        <p className="text-sm">1405/04/05</p>
      </div>
      <div className="border border-gray-600 hover:-translate-y-0.5 rounded py-2 px-5 flex justify-between">
        <p className="text-sm">تاریخ پایان پروژه</p>
        <p className="text-sm">1405/05/05</p>
      </div>
      <div className="border border-gray-600 hover:-translate-y-0.5 rounded py-2 px-5 flex">
        {remainingDays === false ? (
          <p className="text-sm text-[#3B82F6]">مهلت پروژه به اتمام رسیده است.</p>
        ) : (
          <p className="text-sm text-[#3B82F6]">{remainingDays} روز مانده تا پایان پروژه</p>
        )}
      </div>
    </div>
  );
}
