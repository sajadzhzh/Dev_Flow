"use client";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Dispatch, SetStateAction, useState } from "react";
import { Priority } from "@/Containers/Calendar/calendar.types";
import PrioritySelector from "@/Components/ui/PriorityCard";
import SelectBox from "@/Components/ui/Input/Select";
import Button from "@/Components/ui/Input/Button";

export default function EditForm({
  open,
}: {
  open: Dispatch<SetStateAction<boolean>>;
}) {
  const [priority, setPriority] = useState<Priority>("medium");
  return (
    <form className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="projectName" className="text-[13px]">
          نام پروژه
        </label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          className="w-full border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="projectExplain" className="text-[13px]">
          توضیحات
        </label>
        <textarea
          rows={5}
          name="projectExplain"
          id="projectExplain"
          className="w-full outline-0 border border-gray-800 py-2 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
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

      <PrioritySelector onChange={setPriority} value={priority} />

      <div className="flex flex-col gap-2">
        <label htmlFor="projectStatus" className="text-[13px] w-max">
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
          wFull={true}
        />
      </div>

      <div className="flex gap-2">
        <Button
        onClick={()=> open(false)}
        className="lg:w-1/2 text-center py-2 bg-black/25 hover:bg-black/50 cursor-pointer rounded-xl"
      >
        انصراف
      </Button>
      <Button
        type="submit"
        className="lg:w-1/2 text-center py-2 bg-[#8a5cf65b] text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] cursor-pointer rounded-xl"
      >
        ثبت تغییرات
      </Button>
      </div>
    </form>
  );
}
