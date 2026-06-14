import { Box } from "lucide-react";

export default function CardItem() {
  return (
    <>
      <div className="flex items-center justify-between gap-2 my-2 flex-wrap">
        <div className="flex gap-2">
          <div className="p-3 bg-[#8a5cf65b] text-[#8B5CF6] rounded-2xl">
            <Box />
          </div>
          <div className="flex-col gap-2 text-sm lg:text-md">
            طراحی وب‌سایت فروشگاهی
            <div className="text-gray-500 text-sm">
              آخرین بروزرسانی : 2 ساعت پیش
            </div>
          </div>
        </div>
        <div className="grow min-w-1/2 h-max border-b-2 border-gray-700 rounded relative mt-2">
          <p className="absolute left-0 -top-5">50%</p>
          <div className="w-[50%] absolute left-0 top-0 border-t-2 border-[#8B5CF6] h-max rounded"></div>
        </div>
      </div>
    </>
  );
}
