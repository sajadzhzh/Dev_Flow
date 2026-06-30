import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Button";
import SelectBox from "@/Components/ui/Select";
import Card from "@/Components/ui/SmallCard";
import { List, Plus } from "lucide-react";

export default function ProjectDetailsTasks() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col lg:flex-row gap-3 flex-wrap">
        <Card title="کل تسک ها" value={20} trend={2} icon={List} color="blue" />
        <Card
          title="تکمیل شده"
          value={20}
          trend={2}
          icon={List}
          color="green"
        />
        <Card
          title="در حال انجام"
          value={20}
          trend={2}
          icon={List}
          color="orange"
        />
        <Card
          title="در انتظار"
          value={20}
          trend={2}
          icon={List}
          color="purple"
        />
        <Card title="عقب مانده" value={20} trend={2} icon={List} color="red" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-1/2">
          <SelectBox
            name="sortTasks"
            id="sortTasks"
            values={["تاریخ", "اولویت بالا", "اولویت پائین"]}
          />
          <SelectBox
            name="filterTasks"
            id="filterTasks"
            values={["همه", "در حال انجام", "متوقف", "تکمیل شده"]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-1/2">
          <div className="w-full lg:w-2/3">
            <SearchItems name="searchTasks" placeholder="جستجو در تسک ها" />
          </div>
          <div className="w-full lg:w-1/3">
            <Button style="flex items-center justify-center bg-[#3b83f665] text-[#3B82F6] cursor-pointer hover:bg-[#3B82F6] hover:text-white rounded-xl w-full h-full py-2">
              <Plus />
              تسک جدید
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
        <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
          <p className="text-gray-500 w-3/8">تسک</p>
          <p className="text-gray-500 text-center w-1/8">اولویت</p>
          <p className="text-gray-500 text-center w-1/8">مسئول</p>
          <p className="text-gray-500 text-center w-2/8">تاریخ سررسید</p>
          <p className="text-gray-500 text-end w-1/8">عملیات</p>
        </div>
        <div className="flex flex-col gap-2 p-2 h-57 overflow-y-scroll scrollbar-none"></div>
      </div>
    </div>
  );
}
