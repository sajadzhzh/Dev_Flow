import {
  Activity,
  Box,
  Calendar,
  Folder,
  LayoutGrid,
  SquareCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import ProgressRing from "@/Components/Layout/ProgressRing";
import Button from "@/Components/ui/Button";
import "./style.css";
import QuickInfo from "@/Containers/Projects/Dtails/QuickInfo";
import ActivityChart from "@/Components/Layout/ActivityChart";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="flex items-center gap-2 justify-end">
        <div className="text-sm m-0">Dashboard / Projects / {id}</div>
        <LayoutGrid className="text-blue-700" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="w-full xl:w-4/5 bg-[#18181B] pt-5 px-5 rounded-xl border border-gray-600 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              <Box />
            </div>
            <div>
              <h1 className="lg:text-2xl font-black">طراحی سایت فروشگاهی</h1>
              <p className="text-sm text-gray-600">توضيح كوتاه راجع به پروژه</p>
            </div>
          </div>

          <div className="xl:hidden mb-8">
            <p>75%</p>
            <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
              <div className="border-b-4 border-[#3B82F6] rounded-xl w-[75%] absolute"></div>
            </div>
          </div>

          <div className="flex items-center justify-around xl:justify-baseline mb-8">
            <div className="w-2/10 hidden lg:flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-600">مالک پروژه</p>
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
              <p className="text-sm text-gray-600">اولویت</p>
              <div className="text-[#F59E0B] flex items-center gap-1">
                <div className="border-4 border-[#F59E0B] rounded"></div>
                متوسط
              </div>
            </div>

            <div className="w-2/10 hidden lg:flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-600">وضعیت</p>
              <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
                در حال انجام
              </div>
            </div>

            <div className="w-1/3 border border-gray-600 rounded-xl py-2 lg:py-0 lg:border-0 lg:w-2/10 flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-600">تاریخ شروع</p>
              <div className="flex items-center text-sm">
                <Calendar />
                1405/04/05
              </div>
            </div>
            <div className="w-1/3 border border-gray-600 rounded-xl py-2 lg:py-0 lg:border-0 lg:w-2/10 flex gap-2 flex-col items-center justify-center">
              <p className="text-sm text-gray-600">تاریخ پایان</p>
              <div className="flex items-center text-sm">
                <Calendar />
                1405/05/05
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/5 hidden xl:flex items-center bg-[#18181B] py-3 px-5 rounded-xl border border-gray-600">
          <div className="mx-auto">
            <ProgressRing progress={75} subtitle="18 از 24 تسک" />
          </div>

          {/* Stop
            <ProgressRing
            progress={100}
            color="#22C55E"
            subtitle="پروژه تکمیل شد"
            /> */}

          {/* Done
            <ProgressRing
            progress={40}
            color="#EF4444"
            subtitle="پروژه متوقف شده"
            /> */}
        </div>
      </div>

      <div className="w-full flex bg-[#18181B] rounded-xl border-b-2 border-gray-600">
        <Button style="w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326] rounded-s-xl project-subMenu-active">
          <LayoutGrid />
          نمای کلی
        </Button>
        <Button style="w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]">
          <SquareCheck />
          تسک ها
        </Button>
        <Button style="w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]">
          <Users />
          اعضا
        </Button>
        <Button style="w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326]">
          <Folder />
          فایل ها
        </Button>
        <Button style="w-1/5 text-sm py-2 flex flex-col lg:flex-row items-center justify-center gap-2 cursor-pointer hover:bg-[#232326] rounded-e-xl">
          <Activity />
          فعالیت ها
        </Button>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/4 bg-[#18181B] rounded-xl border border-gray-600">
          <QuickInfo />
        </div>
        <div className="w-full lg:w-1/2 bg-[#18181B] rounded-xl border border-gray-600 py-3 ps-10">
          <div className="w-full h-72 flex flex-col items-center justify-center">
            پیشرفت پروژه
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
        <div className="w-full lg:w-1/4 bg-[#18181B] rounded-xl border border-gray-600"></div>
      </div>
    </div>
  );
}
