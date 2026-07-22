import Image from "next/image";
import Logo from "@/public/logo.png";
import ContactWays from "../ContactWays";
import Link from "next/link";
import { Heart, MessageSquare, TriangleAlert } from "lucide-react";

export default function SettingsInfo() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex gap-2 items-center">
        <Image
          src={Logo}
          alt="DevFlow"
          width={500}
          height={500}
          loading="eager"
          className="w-15 lg:w-20 h-10 lg:h-15"
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">هم‌افزا</h3>
          <p className="text-[13px] text-gray-500 lg:w-2/3 text-justify">
            هم‌افزا یک نرم‌افزار مدیریت پروژه و همکاری تیمی است که به شما کمک
            می‌کند پروژه ها را ساده تر مدیریت کنید و بهره‌وری تیم خود را افزایش
            دهید.
          </p>
        </div>
      </div>

      <div className="border-b border-gray-600"></div>

      <div className="w-full flex flex-col gap-2">
        <div className="flex gap-2 flex-col">
          <h3 className="text-xl">راه های ارتباط با ما</h3>
          <p className="text-[13px] text-gray-500 text-justify">
            ما همیشه مشتاق شنیدن نظرات و پیشنهادات شما هستیم
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap gap-2 items-center justify-center">
          <ContactWays app="telegram" id="Sajadzhzh" />
          <ContactWays app="instagram" id="Sajadzhzh" />
          <ContactWays app="tel" id="09102987187" />
          <ContactWays app="email" id="zhiyanjoo1382@gmail.com" />
        </div>
      </div>

      <div className="border-b border-gray-600"></div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex flex-col lg:flex-row gap-2 justify-between">
          <div className="flex gap-2 flex-col">
            <h3 className="text-xl">نظرات و پیشنهادات</h3>
            <p className="text-[13px] text-gray-500 text-justify">
              نظر شما به ما کمک میکند تا هم‌افزا را بهتر کنیم
            </p>
          </div>

          <Link
            href=""
            className="py-2 bg-[#8a5cf660] text-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] flex items-center justify-center gap-2 text-[14px] w-full lg:w-1/6 rounded ms-auto mb-auto"
          >
            ثبت بازخورد
          </Link>
        </div>

        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-2">
          <div className="w-full grow lg:max-w-80 flex gap-2 items-center border border-[#ef44444d] hover:bg-[#ef44444d] py-1 px-2 rounded">
            <div className="bg-[#ef44444d] text-[#EF4444] p-3 rounded-xl">
              <Heart size={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-lg">پیشنهاد ویژگی</h5>
              <p className="text-[13px] text-gray-500 text-justify">
                ایده ها و قابلیت های جدید خود را با ما در اشتراک بگذارید
              </p>
            </div>
          </div>

          <div className="w-full grow lg:max-w-80 flex gap-2 items-center border border-[#f59f0b5b] hover:bg-[#f59f0b2c] py-1 px-2 rounded">
            <div className="bg-[#f59f0b5b] text-[#F59E0B] p-3 rounded-xl">
              <TriangleAlert size={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-lg">گزارش مشکل</h5>
              <p className="text-[13px] text-gray-500 text-justify">
                مشکلات و باگ های برنامه را گزارش دهید
              </p>
            </div>
          </div>

          <div className="w-full grow lg:max-w-80 flex gap-2 items-center border border-[#22c55e4d] hover:bg-[#22c55e4d] py-1 px-2 rounded">
            <div className="bg-[#22c55e2f] text-[#22C55E] p-3 rounded-xl">
              <MessageSquare size={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-lg">نظر کلی</h5>
              <p className="text-[13px] text-gray-500 text-justify">
                نظرات کلی خود را درباره هم‌افزا را برای ما ارسال کنید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
