import ActivityChart from "@/Components/Layout/ActivityChart";
import AboutProject from "./About";
import ProjectDates from "./Dates";
import LastActivities from "./LastActs";
import ProjectUsers from "./Users";
import QuickInfo from "./QuickInfo";

export default function ProjectDetailsOverView() {
  return (
    <>
      <div className="w-full flex flex-col xl:flex-row gap-2 xl:h-70">
        <div className="w-full xl:w-1/4 bg-[#18181B] rounded-xl border border-gray-600">
          <QuickInfo />
        </div>

        <div className="w-full xl:w-1/2 bg-[#18181B] rounded-xl border border-gray-600 py-3 ps-10">
          <div className="w-full h-72 flex flex-col items-center justify-center gap-2">
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

        <div className="w-full xl:w-1/4 flex flex-col gap-2">
          <div className="w-full py-3 px-5 bg-[#18181B] rounded-xl border border-gray-600 h-[60%] overflow-y-scroll scrollbar-none">
            <AboutProject status="active" />
          </div>
          <div className="w-full py-3 px-5 bg-[#18181B] rounded-xl border border-gray-600 h-[40%]">
            <ProjectUsers status="active" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row gap-2">
        <div className="w-full xl:w-1/3 border border-gray-600 bg-[#18181B] py-2 px-5 rounded-xl">
          <ProjectDates />
        </div>
        <div className="w-full xl:w-2/3 border border-gray-600 bg-[#18181B] py-3 px-5 rounded-xl">
          <LastActivities status="active" />
        </div>
      </div>
    </>
  );
}
