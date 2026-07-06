"use client";

import SelectBox from "@/Components/ui/Select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "@/Components/ui/Button";
import Link from "next/link";

export default function TaskForm() {
  const id = 1;
  return (
    <form className="w-full flex flex-col lg:flex-row gap-3">
      <div className="lg:w-1/4 flex flex-col gap-2">
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

        <div className="bg-[#18181b] py-4 px-5 flex flex-col gap-2 rounded-xl border border-gray-600">
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

          <div className="flex flex-col gap-1">
            <label
              htmlFor="reminder"
              className="flex items-center gap-1 justify-between  bg-[#18181B] cursor-pointer transition-colors"
            >
              <span className="text-[13px] text-gray-300">
                یک روز قبل از سررسید به من یادآوری شود
              </span>

              <div className="relative">
                <input
                  id="reminder"
                  name="reminder"
                  type="checkbox"
                  className="peer sr-only"
                />

                <div className="h-6 w-6 rounded-md border-2 border-gray-500 transition-all peer-checked:border-[#3B82F6] peer-checked:bg-[#3B82F6]"></div>

                <svg
                  className="pointer-events-none absolute left-1 top-1 hidden h-4 w-4 text-white peer-checked:block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="lg:w-3/4 flex flex-col gap-3">
        <div className="bg-[#18181b] p-5 flex rounded-xl border border-gray-600">
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
    </form>
  );
}
