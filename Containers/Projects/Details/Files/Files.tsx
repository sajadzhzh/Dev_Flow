import SearchItems from "@/Components/Layout/Search";
import Button from "@/Components/ui/Input/Button";
import SelectBox from "@/Components/ui/Input/Select";
import { Plus } from "lucide-react";
import FileRow from "./FileItem";

export default function ProjectDetailsFiles() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col lg:flex-row gap-3 justify-between">
        <div className="lg:w-1/2 flex-col lg:flex-row flex gap-3">
          <SelectBox
            id="filterFileType"
            name="filterFileType"
            values={["همه فایل ها", "تصویر", "ویدئو", "PDF"]}
          />
          <SelectBox
            id="filterFileSort"
            name="filterFileSort"
            values={[
              "همه",
              "جدیدترین",
              "قدیمی‌ترین",
              "A → Z",
              "Z → A",
              "بیشترین حجم",
              "کمترین حجم",
            ]}
          />
        </div>

        <div className="lg:w-1/2 flex-col lg:flex-row flex gap-3">
          <div className="lg:w-2/3">
            <SearchItems name="SearchFiles" placeholder="جستجو در فایل ها" />
          </div>
          <Button style="flex items-center justify-center bg-[#3b83f665] text-[#3B82F6] cursor-pointer hover:bg-[#3B82F6] hover:text-white rounded-xl p-2 lg:w-1/3">
            <Plus />
            آپلود جدید
          </Button>
        </div>
      </div>

      <div className="w-full xl:bg-[#18181B] xl:border border-gray-600 rounded-xl">
        <div className="py-3 px-5 hidden xl:flex border-b border-gray-600">
          <p className="text-gray-500 w-3/11">نام</p>
          <p className="text-gray-500 text-center w-1/11">نوع</p>
          <p className="text-gray-500 text-center w-1/11">حجم</p>
          <p className="text-gray-500 text-center w-2/11">تاریخ تغییر</p>
          <p className="text-gray-500 text-center w-2/11">تغییر دهنده</p>
          <p className="text-gray-500 text-center w-2/11">عملیات</p>
        </div>
        
        <div className="flex flex-col gap-2 p-2 h-85 overflow-y-scroll scrollbar-none z-0">
            <FileRow 
            fileName="فایل تست"
            type="PDF"
            volume="2.4mb"
            date="1405/05/05"
            priority="mid"
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
            <FileRow 
            fileName="فایل تست"
            type="PDF"
            volume="2.4mb"
            date="1405/05/05"
            priority="high"
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
