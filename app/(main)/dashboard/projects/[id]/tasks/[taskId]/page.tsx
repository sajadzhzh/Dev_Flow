import FileItem from "@/Components/Layout/FileItem";
import Button from "@/Components/ui/Button";
import CheckListItem from "@/Components/ui/CheckList/Item";
import DropdownMenu from "@/Components/ui/DropDownMenu";
import LastActivities from "@/Containers/Projects/Details/OverView/LastActs";
import TaskStatus from "@/Containers/Tasks/TaskStatus";
import { LayoutGrid, Plus, Trash2 } from "lucide-react";
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

            <TaskStatus />
          </div>

          <div className="w-full py-3 px-5 flex flex-col gap-1 bg-[#18181b] border border-gray-600 rounded-xl h-45 overflow-y-scroll scrollbar-none">
            <h3 className="mb-1">اخرین فعالیت ها</h3>

            <LastActivities status="active" />
            <LastActivities status="active" />
            <LastActivities status="active" />
          </div>
        </div>

        <div className="w-full h-182 flex flex-col gap-3 overflow-y-scroll scrollbar-none xl:w-2/3 py-3 px-5 bg-[#18181b] border border-gray-600 rounded-xl">
          <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl">طراحی صفحه ورود کاربران</h2>
              <p
                style={{ direction: "ltr" }}
                className="w-max text-[12px] text-gray-500"
              >
                # task-12345
              </p>
              <p className="w-max text-[12px] text-gray-500">
                تاریخ ایجاد : 1405/05/05
              </p>
            </div>

            <div className="order-1 lg:order-2 ms-auto">
              <p className="py-1 px-3 text-[#22C55E] text-[13px]">
                در حال انجام
              </p>
            </div>
          </div>

          <div className="border-b border-gray-600"></div>

          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[14px]">توضیحات</h2>
            <p className="text-justify text-[12px] text-gray-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="border-b border-gray-600"></div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <h2 className="text-[14px]">چک لیست</h2>

              <p className="text-[12px] text-gray-500">
                0 مورد از 4 مورد تکمیل شده
              </p>
            </div>
            <CheckListItem name="aaa" title="طراحی UI" />
            <CheckListItem name="bbb" title="طراحی UI" />
            <CheckListItem name="ccc" title="طراحی UI" />
            <CheckListItem name="ddd" title="طراحی UI" />

            <Button style="w-full py-1 border border-gray-600 rounded-xl text-[#3B82F6] flex items-center justify-center cursor-pointer hover:bg-[#3b83f665]">
              <Plus />
              افزودن آیتم جدید
            </Button>
          </div>

          <div className="border-b border-gray-600"></div>

          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[14px]">پیوست ها</h2>
            <div className="w-full flex gap-1 flex-wrap">
              <FileItem name="تست" volume="1.2" link="" />
              <FileItem name="تست" volume="1.2" link="" />
              <FileItem name="تست" volume="1.2" link="" />
            </div>
          </div>

          <div className="border-b border-gray-600"></div>

          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[14px]">نظر ها</h2>
            <div className="w-full flex flex-col gap-1">
              <form className="w-full flex flex-col lg:flex-row gap-2">
                <input
                  type="text"
                  placeholder="نظر خود را بنویسید"
                  className="lg:w-3/4 border border-gray-800 py-1 ps-4 rounded-xl focus:border-gray-400 placeholder:text-gray-500"
                />
                <Button style="lg:w-1/4 flex items-center justify-center bg-[#3b83f665] text-[#3B82F6] cursor-pointer hover:bg-[#3B82F6] hover:text-white rounded-xl w-full h-full py-2">
                  ارسال
                </Button>
              </form>

              <div className="w-full flex justify-between items-center">
                <div>
                    <p className="text-gray-500 text-[12px]">1405/05/05 10:00</p>
                    <p className="text-gray-400">سلام این یک پیام تسته</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
