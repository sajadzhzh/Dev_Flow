import { Pencil } from "lucide-react";
import Link from "next/link";

export default function AboutProject({
  status,
}: {
  status: "active" | "suspend" | "done";
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <h3>درباره پروژه</h3>
        {status === "active" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 px-3 border border-[#3B82F6] rounded text-[#3B82F6] hover:text-white hover:bg-[#3B82F6]"
          >
            <Pencil className="w-4" />
            ویرایش اطلاعات
          </Link>
        )}
        {status === "done" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 px-3 border border-[#22C55E] rounded text-[#22C55E] hover:text-white hover:bg-[#22C55E]"
          >
            <Pencil className="w-4" />
            ویرایش اطلاعات
          </Link>
        )}
        {status === "suspend" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 px-3 border border-[#EF4444] rounded text-[#EF4444] hover:text-white hover:bg-[#EF4444]"
          >
            <Pencil className="w-4" />
            ویرایش اطلاعات
          </Link>
        )}
      </div>
      <p className="text-sm text-justify text-wrap text-gray-500">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      </p>
    </div>
  );
}
