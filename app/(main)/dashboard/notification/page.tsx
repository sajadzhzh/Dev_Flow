import Button from "@/Components/ui/Input/Button";
import SelectBox from "@/Components/ui/Input/Select";
import { Bell, Box, Check, Trash2 } from "lucide-react";

export default function NotificationPage() {
  return (
    <div className="w-full flex flex-col gap-3 py-3 px-5">
      <div className="flex justify-between gap-3 flex-col lg:flex-row">
        <div className="flex grow items-center gap-2">
          <Bell />
          <div>
            <h1 className="text-xl">اعلان ها</h1>
            <p className="text-[13px] text-gray-500">
              از آخرین فعالیت های پروژه ها و سیستم مطلع شوید
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row grow items-center gap-2">
          <Button style="w-full lg:w-1/2 flex items-center justify-center gap-2 py-2 rounded cursor-pointer bg-[#18181b] hover:bg-[#28282b]">
            <Check />
            خواندن همه
          </Button>
          <Button style="w-full lg:w-1/2 flex items-center justify-center gap-2 py-2 rounded cursor-pointer bg-[#8a5cf65b] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white">
            <Trash2 />
            پاک کردن خوانده شده ها
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-3 justify-between">
        <div className="hidden w-full lg:flex gap-0.5 bg-gray-600 rounded border border-gray-600">
          <Button style="flex items-center justify-center cursor-pointer bg-[#3B82F6] text-white rounded p-2 w-1/7">
            همه
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            خوانده نشده
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            تسک ها
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            پروژه ها
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            یادآوری
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            سیستم
          </Button>
          <Button style="flex items-center justify-center bg-[#18181B] text-white cursor-pointer hover:bg-[#3b83f665] rounded p-2 w-1/7">
            امنیتی
          </Button>
        </div>

        <div className="w-full lg:hidden">
            <SelectBox
            id="type"
            name="type"
            values={["همه", "خوانده نشده", "تسک ها", "پروژه ها", "یادآوری", "سیستم", "امنیتی"]}
            />
        </div>
      </div>

      <div className="w-full bg-[#18181b] border border-gray-600 py-3 px-5 rounded-xl flex flex-col items-center lg:flex-row gap-3">
        <div className="bg-[#8a5cf65b] text-[#8B5CF6] p-4 rounded">
          <Box />
        </div>

        <div>
          <h3 className="text-xl">یک تسک جدید به شما اختصاص داده شد</h3>
          <p className="text-[13px] text-gray-500">تسک طراحی صفحه لاگین توسط امیر محمدی به شما اختصاص داده شد</p>
        </div>
      </div>
    </div>
  );
}
