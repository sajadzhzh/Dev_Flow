import { Download } from "lucide-react";
import Link from "next/link";

export default function FileItem({
  name,
  volume,
  link,
}: {
  name: string;
  volume: string;
  link: string;
}) {
  return (
    <div className="w-full xl:w-60 py-2 px-3 flex items-center justify-between border border-gray-500 rounded bg-[#28282b]">
      <div>
        <h3>{name}</h3>
        <p style={{ direction: "ltr" }} className="text-[13px] text-gray-500">
          {volume} Mb
        </p>
      </div>

      <Link href={link} className="hover:text-[#3B82F6]">
        <Download />
      </Link>
    </div>
  );
}
