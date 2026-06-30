import Image from "next/image";
import Profile from "@/public/Profile.png";
import { Activity } from "lucide-react";

export default function LastActivities({
  status,
}: {
  status: "active" | "suspend" | "done";
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      <h3 className="mb-1">اخرین فعالیت ها</h3>
      {status === "active" && (
        <div className="border border-gray-600 hover:-translate-y-0.5 hover:border-[#3B82F6] rounded py-2 px-5 flex items-center gap-5">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-8 rounded-full hidden lg:block"
          />
          <div className="p-1.5 bg-[#3b83f662] text-[#3B82F6] rounded">
            <Activity />
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-3/4">
            <p className="text-sm">یک فعالیت جدید توسط sajadzhzh</p>
            <p className="text-small text-gray-500 lg:text-white">1405/04/05</p>
          </div>
        </div>
      )}

      {status === "done" && (
        <div className="border border-gray-600 hover:-translate-y-0.5 hover:border-[#22C55E] rounded py-2 px-5 flex items-center gap-5">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-8 rounded-full hidden lg:block"
          />
          <div className="p-1.5 bg-[#22c55e62] text-[#22C55E] rounded">
            <Activity />
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-3/4">
            <p className="text-sm">یک فعالیت جدید توسط sajadzhzh</p>
            <p className="text-small text-gray-500 lg:text-white">1405/04/05</p>
          </div>
        </div>
      )}
      
      {status === "suspend" && (
        <div className="border border-gray-600 hover:-translate-y-0.5 hover:border-[#EF4444] rounded py-2 px-5 flex items-center gap-5">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-8 rounded-full hidden lg:block"
          />
          <div className="p-1.5 bg-[#ef444463] text-[#EF4444] rounded">
            <Activity />
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-3/4">
            <p className="text-sm">یک فعالیت جدید توسط sajadzhzh</p>
            <p className="text-small text-gray-500 lg:text-white">1405/04/05</p>
          </div>
        </div>
      )}
    </div>
  );
}
