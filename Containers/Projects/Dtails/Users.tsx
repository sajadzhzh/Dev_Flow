import Image from "next/image";
import Link from "next/link";
import Profile from "@/public/Profile.png";
import Profile2 from "@/public/smoke.png";

export default function ProjectUsers({
  status,
}: {
  status: "active" | "suspend" | "done";
}) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <h3>اعضا</h3>
        {status === "active" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 py-1 px-3 border border-[#3B82F6] rounded text-[#3B82F6] hover:text-white hover:bg-[#3B82F6]"
          >
            مشاهده از همه
          </Link>
        )}
        {status === "done" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 py-1 px-3 border border-[#22C55E] rounded text-[#22C55E] hover:text-white hover:bg-[#22C55E]"
          >
            مشاهده از همه
          </Link>
        )}
        {status === "suspend" && (
          <Link
            href=""
            className="text-small flex items-center gap-2 py-1 px-3 border border-[#EF4444] rounded text-[#EF4444] hover:text-white hover:bg-[#EF4444]"
          >
            مشاهده از همه
          </Link>
        )}
      </div>
      <div className="flex justify-center">
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
            className="size-10 rounded-full"
          />
      </div>
    </div>
  );
}
