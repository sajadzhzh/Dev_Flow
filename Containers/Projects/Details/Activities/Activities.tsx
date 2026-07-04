import Button from "@/Components/ui/Button";
import SelectBox from "@/Components/ui/Select";
import ActivityRow from "./ACtivityItem";

export default function ProjectDetailsActivity() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col lg:flex-row gap-3 justify-between">
        <div className="lg:w-1/3 flex flex-col lg:flex-row gap-0.5 bg-gray-600 rounded border border-gray-600">
          <Button style="flex items-center justify-center cursor-pointer bg-[#3B82F6] text-white rounded p-2 lg:w-1/3">
            همه
          </Button>
          <Button style="flex items-center border-s border-e border-gray-600 justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 lg:w-1/3">
            من
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 lg:w-1/3">
            تیم
          </Button>
        </div>

        <div className="lg:w-1/2 flex-col lg:flex-row flex gap-3 justify-end">
          <SelectBox
            id="filterActivities"
            name="filterActivities"
            values={["همه", "جدیدترین", "قدیمی ترین"]}
          />
        </div>
      </div>

      <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
        <div className="flex flex-col gap-2 p-2 h-99 overflow-y-scroll scrollbar-none z-0">
          <ActivityRow 
            title="sajadzhzh یک فایل جدید آپلود کرد"
            subTitle="UI صفحه اصلی"
            date="1405/05/05"
            />
        </div>
      </div>
    </div>
  );
}
