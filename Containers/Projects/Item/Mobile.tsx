import { Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/public/Profile.png";
import Profile2 from "@/public/smoke.png";

export default function Mobile(){
    return(
        <Link href="" className="flex gap-4 flex-col xl:hidden">
        <div className="w-full flex gap-2 items-center">
          <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
            <Box />
          </div>
          <div>
            <h3>طراحی سایت فروشگاهی</h3>
            <p className="text-small text-gray-500">لورم ایپسوم</p>
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          <div className="ms-auto border-b-4 rounded-xl border-gray-700 w-full relative">
            <div className="border-b-4 border-[#3B82F6] rounded-xl w-[75%] absolute"></div>
          </div>
          <p>75%</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-1/10">
            <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              در حال انجام
            </div>
          </div>

          <div className="w-2/10 flex items-center justify-center">
            <Image
              src={Profile}
              alt="Profile"
              width={1000}
              height={1000}
              loading="eager"
              className="size-10 rounded-full"
            />
            <Image
              src={Profile2}
              alt="Profile"
              width={1000}
              height={1000}
              loading="eager"
              className="size-10 rounded-full translate-x-3"
            />
            +2
          </div>
        </div>
      </Link>
    )
}