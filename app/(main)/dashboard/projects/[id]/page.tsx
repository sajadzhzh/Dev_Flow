import { Box, Calendar, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="flex items-center gap-2 justify-end">
        <div className="text-sm m-0">Dashboard / Projects / 1</div>
        <LayoutGrid className="text-blue-700" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="lg:w-4/5 bg-[#18181B] py-3 px-5 rounded-xl border border-gray-600">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              <Box />
            </div>
            <h1 className="lg:text-2xl">طراحی سایت فروشگاهی</h1>
          </div>

          <div className="lg:hidden mb-8">
            <p>75%</p>
            <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
              <div className="border-b-4 border-[#3B82F6] rounded-xl w-[75%] absolute"></div>
            </div>
          </div>

          <div className="flex items-center justify-around xl:justify-baseline">
            <div className="w-2/10 hidden lg:flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-500">مالک پروژه</p>
              <div className="flex items-center gap-2">
                <Image
                  src={Profile}
                  alt="Profile"
                  width={1000}
                  height={1000}
                  loading="eager"
                  className="size-8 rounded-full"
                />
                sajadzhzh
              </div>
            </div>

            <div className="w-2/10 hidden lg:flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-500">اولویت</p>
              <div className="text-[#F59E0B] flex items-center gap-1">
                <div className="border-4 border-[#F59E0B] rounded"></div>
                متوسط
              </div>
            </div>

            <div className="w-2/10 hidden lg:flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-500">وضعیت</p>
              <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
                در حال انجام
              </div>
            </div>

            <div className="w-1/3 border border-gray-600 rounded py-2 lg:py-0 lg:border-0 lg:w-2/10 flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-500">تاریخ شروع</p>
              <div className="flex items-center text-sm">
                <Calendar />
                1405/04/05
              </div>
            </div>
            <div className="w-1/3 border border-gray-600 rounded py-2 lg:py-0 lg:border-0 lg:w-2/10 flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-500">تاریخ پایان</p>
              <div className="flex items-center text-sm">
                <Calendar />
                1405/05/05
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/5 bg-[#18181B] py-3 px-5 rounded-xl border border-gray-600"></div>
      </div>
    </div>
  );
}
