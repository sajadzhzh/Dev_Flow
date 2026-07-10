"use client";

import SelectBox from "@/Components/ui/Select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import CheckListItem from "@/Components/ui/CheckList/Item";
import InputFile from "@/Components/ui/Input/file";

export default function TaskForm() {
  const id = 1;
  return (
    <form className="w-full flex flex-col lg:flex-row gap-3">
      <div className="lg:w-1/4 flex flex-col gap-1">
        <div className="bg-[#18181b] py-4 px-5 flex flex-col gap-2 rounded-xl border border-gray-600">
          <h3>اطلاعات کلی</h3>
          <div className="flex flex-col gap-1">
            <label htmlFor="selectProject" className="text-[13px]">
              پروژه
            </label>
            <SelectBox
              id="selectProject"
              name="selectProject"
              smallY={true}
              values={["هم افزا", "سایت فروشگاهی"]}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="selectDeveloper" className="text-[13px]">
              مسئول انجام
            </label>
            <SelectBox
              id="selectDeveloper"
              name="selectDeveloper"
              smallY={true}
              values={["sajadzhzh", "amir"]}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="selectPriority" className="text-[13px]">
              اولویت
            </label>
            <SelectBox
              id="selectPriority"
              name="selectPriority"
              smallY={true}
              values={["حیاتی", "بالا", "متوسط", "پائین"]}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="selectStatus" className="text-[13px]">
              وضعیت
            </label>
            <SelectBox
              id="selectStatus"
              name="selectStatus"
              smallY={true}
              values={["در انتظار بررسی", "در حال انجام", "تکمیل", "متوقف"]}
            />
          </div>
        </div>

        <div className="bg-[#18181b] py-4 px-5 flex flex-col gap-2 rounded-xl border border-gray-600">
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

        <div className="bg-[#18181b] py-2 px-5 flex flex-col gap-2 rounded-xl border border-gray-600">
          <h3>اطلاعات بیشتر</h3>

          <div className="flex flex-col gap-1">
            <label htmlFor="boss" className="text-[13px]">
              ناظر
            </label>
            <SelectBox
              id="boss"
              name="boss"
              smallY={true}
              values={["sajadzhzh", "amir"]}
            />
          </div>

          <CheckListItem
            title="یک روز قبل از سررسید به من یادآوری شود"
            name="bbb"
          />
        </div>
      </div>

      <div className="lg:w-3/4 flex flex-col gap-3">
        <div className="bg-[#18181b] p-5 flex flex-col gap-3 rounded-xl border border-gray-600">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="title" className="text-[13px]">
              عنوان تسک
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full py-1 px-3 border border-gray-600 rounded-xl focus:border-gray-400 placeholder:text-gray-600 placeholder:text-sm"
              placeholder="عنوان تسک را وارد کنید"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="explanation" className="text-[13px]">
              توضیحات
            </label>
            <textarea
              name="explanation"
              rows={5}
              id="explanation"
              className="w-full py-1 px-3 border border-gray-600 rounded-xl focus:border-gray-400 outline-0 placeholder:text-gray-600 placeholder:text-sm"
              placeholder="توضیحات تسک را وارد کنید"
            />
          </div>

          <InputFile />

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="checkList" className="text-[13px]">
              چک لیست
            </label>
            <input
              type="text"
              name="addCheckList"
              className="w-full border border-gray-800 py-1 px-3  rounded-xl focus:border-gray-400 placeholder:text-gray-500"
              placeholder="افزودن آیتم جدید"
            />

            <div className="mt-3 flex flex-col gap-2">
              <CheckListItem title="طراحی UI" name="aaa" />
            </div>
          </div>

          <div className="w-full flex gap-3">
            <Button
              type="submit"
              style="grow h-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white"
            >
              ذخیره
            </Button>
            <Link
              href={`/dashboard/projects/${id}?view=tasks`}
              className="grow h-max py-2 px-4 text-center bg-[#28282b] text-white rounded-xl cursor-pointer hover:bg-[#38383b]"
            >
              انصراف
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
