import Button from "@/Components/ui/Button";
import DropdownMenu from "@/Components/ui/DropDownMenu";
import LastActivities from "@/Containers/Projects/Details/OverView/LastActs";
import {
  Bell,
  Calendar,
  ClipboardPen,
  Flag,
  Folder,
  LayoutGrid,
  Trash2,
  User,
  UserStar,
} from "lucide-react";
import Link from "next/link";

const menus = [
  {
    title: "ویرایش تسک",
    href: "/dashboard/projects/1/tasks/1/edit",
  },
  {
    title: "تغییر مسئول انجام",
    href: "",
  },
  {
    title: "تغییر وضعیت",
    href: "",
  },
  {
    title: "مدیریت فایل‌ها",
    href: "",
  },
  {
    title: "کپی لینک",
    href: "",
  },
  {
    dividerBefore: true,
    title: "حذف تسک",
    danger: true,
    href: "",
  },
];

export default async function TasksDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="w-full flex flex-col gap-3 py-3 px-5">
      <div className="flex items-center gap-2 justify-end">
        <div className="text-sm m-0">
          Dashboard / Projects / 1 / Tasks / {id}
        </div>
        <LayoutGrid className="text-blue-700" />
      </div>

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="xl:w-1/3 hidden xl:flex flex-col gap-3">
          <div className="w-full flex flex-col gap-2 py-3 px-5 bg-[#18181b] border border-gray-600 rounded-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-[14px]">اطلاعات تسک</h3>

              <div className="flex items-center gap-1">
                <DropdownMenu items={menus} buttonClassName="py-1.5 px-1.5" />
                <Button style="p-1.5 border border-[#EF4444] rounded-xl text-[#EF4444] cursor-pointer hover:bg-[#ef44444d]">
                  <Trash2 size={20} />
                </Button>
                <Link
                  href="/dashboard/projects/1/tasks/1/edit"
                  className="py-1.5 px-3 h-max border border-[#3B82F6] text-[#3B82F6] text-sm rounded-xl hover:bg-[#3b83f665]"
                >
                  ویرایش
                </Link>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <Folder />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">پروژه</p>
                <p className="text-sm">هم‌افزا</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <User />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">مسئول انجام</p>
                <p className="text-sm">sajadzhzh</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <UserStar />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">ناظر</p>
                <p className="text-sm">amir</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <Flag />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">اولویت</p>
                <p className="text-sm text-[#8B5CF6]">حیاتی</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <ClipboardPen />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">وضعیت</p>
                <p className="text-sm text-[#22C55E]">در حال انجام</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <Calendar />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">تاریخ شروع</p>
                <p className="text-sm">1405/05/05</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <Calendar />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">
                  مهلت انجام ( سررسید )
                </p>
                <p className="text-sm">1405/06/05</p>
              </div>
            </div>

            <div className="border-b border-gray-600"></div>

            <div className="flex items-center gap-3">
              <Bell />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] text-gray-500">یادآوری</p>
                <p className="text-sm">یک روز قبل از سررسید</p>
              </div>
            </div>
          </div>

          <div className="w-full py-3 px-5 flex flex-col gap-1 bg-[#18181b] border border-gray-600 rounded-xl h-45 overflow-y-scroll scrollbar-none">
            <h3 className="mb-1">اخرین فعالیت ها</h3>

            <LastActivities status="active" />
            <LastActivities status="active" />
            <LastActivities status="active" />
          </div>
        </div>

        <div className="w-full xl:w-2/3 py-3 px-5 bg-[#18181b] border border-gray-600 rounded-xl"></div>
      </div>
    </div>
  );
}
