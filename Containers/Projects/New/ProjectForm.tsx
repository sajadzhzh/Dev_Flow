"use client";

import Button from "@/Components/ui/Button";
import SelectBox from "@/Components/ui/Select";
import { X } from "lucide-react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CheckListItem from "@/Components/ui/CheckList/Item";
import Link from "next/link";

export default function ProjectForm() {
  return (
    <form className="w-full flex flex-col lg:flex-row gap-3">
      <div className="lg:w-1/4 flex flex-col gap-3">
        <div className="w-full flex flex-col gap-3 bg-[#18181b] py-3 px-4 border border-gray-600 rounded-xl">
          <h3>اطلاعات مدیر پروژه</h3>
          <div>
            <label htmlFor="projectBoss" className="text-[13px]">
              مدیر پروژه
            </label>
            <SelectBox
              name="projectBoss"
              id="projectBoss"
              values={["sajad", "amir", "ali"]}
              smallY={true}
            />
          </div>

          <div>
            <label htmlFor="projectAdmin" className="text-[13px]">
              ناظر پروژه
            </label>
            <SelectBox
              name="projectAdmin"
              id="projectAdmin"
              values={["sajad", "amir", "ali"]}
              smallY={true}
            />
          </div>

          <div>
            <label htmlFor="projectUser" className="text-[13px]">
              اعضای اولیه پروژه
            </label>
            <SelectBox
              name="projectUser"
              id="projectUser"
              values={["انتخاب عضو", "sajad", "amir", "ali"]}
              smallY={true}
            />
          </div>

          <div className="flex justify-between items-center xl:w-52 rounded-xl py-1 px-3 bg-gray-500/50 ">
            sajad
            <Button style="cursor-pointer hover:text-red-500">
              <X />
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 bg-[#18181b] py-3 px-4 border border-gray-600 rounded-xl">
          <h3>تاریخ ها</h3>
          <div className="flex flex-col gap-1">
            <label htmlFor="startDate" className="text-[13px]">
              تاریخ شروع
            </label>
            <DatePicker
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
              name="startDate"
              id="startDate"
              inputClass="border border-gray-600 rounded p-1 w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="deadLine" className="text-[13px]">
              مهلت انجام ( سررسید )
            </label>
            <DatePicker
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
              name="deadLine"
              id="deadLine"
              inputClass="border border-gray-600 rounded p-1 w-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 bg-[#18181b] py-3 px-4 border border-gray-600 rounded-xl">
          <h3>تنظیمات پروژه</h3>

          <div>
            <label htmlFor="projectStatus" className="text-[13px]">
              وضعیت پروژه
            </label>
            <SelectBox
              name="projectStatus"
              id="projectStatus"
              values={[
                "در حال برنامه ریزی",
                "در حال انجام",
                "تکمیل شده",
                "متوقف شده",
              ]}
              smallY={true}
            />
          </div>

          <CheckListItem
            name="availableAll"
            title="قابل مشاهده برای همه اعضای تیم"
          />
        </div>
      </div>
      <div className="lg:w-3/4 flex flex-col gap-3 bg-[#18181b] py-2 px-4 border border-gray-600 rounded-xl">
        <h3>اطلاعات اصلی</h3>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="projectName">نام پروژه</label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
            placeholder="نام پروژه را وارد کنید"
          />
        </div>

        <div className="w-full flex gap-3">
          <Button
            type="submit"
            style="grow h-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white"
          >
            ثبت
          </Button>
          <Link
            href="/dashboard/projects"
            className="grow h-max py-2 px-4 text-center bg-[#28282b] text-white rounded-xl cursor-pointer hover:bg-[#38383b]"
          >
            انصراف
          </Link>
        </div>
      </div>
    </form>
  );
}
