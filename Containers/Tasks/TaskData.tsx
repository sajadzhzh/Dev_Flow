import Profile from "@/public/Profile.png";
import Image from "next/image";
import FileItem from "@/Components/Layout/FileItem";
import CheckListItem from "@/Components/ui/CheckList/Item";
import Button from "@/Components/ui/Button";
import { Plus } from "lucide-react";

export default function TaskData() {
  return (
    <>
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
          <p className="py-1 px-3 text-[#22C55E] text-[13px]">در حال انجام</p>
        </div>
      </div>

      <div className="border-b border-gray-600"></div>

      <div className="w-full flex flex-col gap-2">
        <h2 className="text-[14px]">توضیحات</h2>
        <p className="text-justify text-[12px] text-gray-400">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
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
        <div className="w-full flex flex-col gap-2">
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

          <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center border border-gray-500 rounded py-2 px-3">
            <div className="w-3/4 order-2 lg:order-1 flex flex-col">
              <p className="text-gray-500 text-[12px] order-2 lg:order-1">
                1405/05/05 10:00
              </p>
              <p className="text-gray-400 text-[14px] order-1 lg:order-2">
                سلام این یک پیام تسته
              </p>
            </div>

            <div className="flex gap-2 items-center order-1 lg:order-2 ms-auto">
              sajadzhzh
              <Image
                src={Profile}
                alt="Profile"
                width={1000}
                height={1000}
                loading="eager"
                className="size-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
