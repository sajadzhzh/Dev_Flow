import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Input/Button";
import SelectBox from "@/Components/ui/Input/Select";
import Card from "@/Components/ui/SmallCard";
import { FolderOpen, Gavel, SquareCheck, UserPlus, Users } from "lucide-react";
import UsersTable from "@/Containers/Team/Users"

export default function TeamPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-5">
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="flex items-center justify-end gap-2 w-full lg:w-1/2 h-max order-1 lg:order-2">
          <Button className="flex gap-1 justify-center w-full lg:w-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white">
            <UserPlus />
            دعوت عضو جدید
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 h-max order-2 lg:order-1">
          <h2 className="text-2xl m-0">اعضای تیم</h2>
          <p className="text-sm text-gray-400">مدیریت اعضای تیم و عملکرد کلی</p>
        </div>
      </div>

      <div className="w-full flex gap-5 flex-wrap flex-col lg:flex-row">
        <Card title="تسک های فعال" value={20} icon={Gavel} color="purple" />

        <Card
          title="پروژه‌های فعال"
          value={12}
          icon={FolderOpen}
          color="blue"
        />

        <Card
          title="پروژه‌های تکمیل شده"
          value={8}
          icon={SquareCheck}
          color="green"
        />

        <Card title="تعداد اعضا" value={2} icon={Users} color="orange" />
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          <SelectBox
            name="filterUsers"
            id="filterUsers"
            values={["بیشترین پروژه", "بیشترین تسک", "آخرین فعالیت"]}
          />
        </div>

        <div className="w-full lg:w-1/3">
          <SearchItems name="searchUsers" placeholder="جستجو اعضا" />
        </div>
      </div>

      <UsersTable />
    </div>
  );
}
