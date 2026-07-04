import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Button";
import SelectBox from "@/Components/ui/Select";
import Card from "@/Components/ui/SmallCard";
import { Brush, CodeXml, Plus, User, Users, UserStar } from "lucide-react";
import UserRow from "./UserItem";

export default function ProjectDetailsUsers() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-wrap flex-col lg:flex-row gap-3">
        <Card title="ناظر" value={1} color="orange" icon={UserStar} />
        <Card title="طراح" value={1} color="red" icon={Brush} />
        <Card title="توسعه دهنده" value={4} color="blue" icon={CodeXml} />
        <Card title="مدیر پروژه" value={2} color="green" icon={User} />
        <Card title="کل اعضا" value={8} color="purple" icon={Users} />
      </div>

      <div className="w-full flex justify-between flex-wrap flex-col lg:flex-row gap-3">
        <SelectBox
          id="filterUsers"
          name="filterUsers"
          values={["همه", "ناظر", "طراح", "توسعه دهنده", "مدیر پروژه"]}
        />

        <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:w-2/3 justify-end">
          <div className="lg:w-1/2">
            <SearchItems name="searchUsers" placeholder="جستجو در اعضا" />
          </div>
          <Button style="flex items-center justify-center bg-[#3b83f665] text-[#3B82F6] cursor-pointer hover:bg-[#3B82F6] hover:text-white rounded-xl p-2">
            <Plus />
            دعوت عضو جدید
          </Button>
        </div>
      </div>

      <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
        <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
          <p className="text-gray-500 w-3/11">عضو</p>
          <p className="text-gray-500 text-center w-1/11">نقش</p>
          <p className="text-gray-500 text-center w-3/11">ایمیل</p>
          <p className="text-gray-500 text-center w-1/11">تاریخ عضویت</p>
          <p className="text-gray-500 text-center w-1/11">وضعیت</p>
          <p className="text-gray-500 text-center w-2/11">عملیات</p>
        </div>
        <div className="flex flex-col gap-2 p-2 h-60 overflow-y-scroll scrollbar-none z-0">
          <UserRow
            name="sajadzhzh"
            label="supervisor"
            date="1405/05/05"
            email="zhiyanjoo1382@gmail.com"
            status="active"
            menus={[
              {
                title: "مشاهده جزئیات",
                href: "/dashboard/projects/1",
              },
              {
                title: "ویرایش",
                onClick: () => console.log("edit"),
              },
              {
                title: "مدیریت اعضا",
                href: "/dashboard/projects/1?view=users",
              },
              {
                title: "کپی لینک",
                onClick: () => {
                  navigator.clipboard.writeText(window.location.href);
                },
              },
              {
                dividerBefore: true,
                title: "حذف پروژه",
                danger: true,
                onClick: () => {
                  console.log("delete");
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
