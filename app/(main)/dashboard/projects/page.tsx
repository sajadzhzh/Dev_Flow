import SearchItems from "@/Components/Layout/Search";
import SelectBox from "@/Components/ui/Select";
import Card from "@/Components/ui/SmallCard";
import Projects from "@/Containers/Projects/Projects";
import {
  Folder,
  FolderOpen,
  Folders,
  SquareCheck,
  SquarePause,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <div className="flex lg:flex-col items-center lg:items-end justify-between gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          <Link href="/dashboard/projects/new" className="order-1 lg:order-2 h-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white">
            + پروژه جدید
          </Link>
          <div className="flex items-center gap-2 order-2 lg:order-1">
            <div className="text-sm m-0">Dashboard / Projects</div>
            <LayoutGrid className="text-blue-700" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <div className="flex items-center gap-2">
            <Folder />
            <h2 className="text-2xl m-0">پروژه‌ها</h2>
          </div>
          <p className="text-sm text-gray-400">
            مدیریت و بررسی تمام پروژه های شما
          </p>
        </div>
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
        <Card
          title="کل پروژه‌ها"
          value={20}
          trend={2}
          icon={Folders}
          color="purple"
        />

        <Card
          title="پروژه‌های فعال"
          value={12}
          trend={3}
          icon={FolderOpen}
          color="blue"
        />

        <Card
          title="پروژه‌های تکمیل شده"
          value={8}
          trend={1}
          icon={SquareCheck}
          color="green"
        />

        <Card
          title="پروژه‌های متوقف شده"
          value={2}
          trend={0}
          icon={SquarePause}
          color="orange"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          <SelectBox
            name="filterTime"
            id="filterTime"
            values={["جدیدترین", "قدیمی ترین", "بیشترین پیشرفت"]}
          />

          <SelectBox
            name="filterStatus"
            id="filterStatus"
            values={["همه وضعیت ها", "تکمیل شده", "در حال انجام", "متوقف شده"]}
          />

          <SelectBox
            name="filterPaticipants"
            id="filterPaticipants"
            values={["همه اعضا", "sajad", "ali", "mohammad"]}
          />
        </div>

        <div className="w-full lg:w-1/3">
          <SearchItems name="searchProjects" placeholder="جستجو در پروژه ها" />
        </div>
      </div>

      <Projects />
    </div>
  );
}
