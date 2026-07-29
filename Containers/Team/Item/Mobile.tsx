import Image from "next/image";
import Profile from "@/public/Profile.png";
import TeamActions from "./Actions";

export default function TeamMobile({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="w-full flex xl:hidden ">
      <div className="w-2/3">
        <div className="flex gap-2 items-center">
          <Image
            src={Profile}
            alt="Profile"
            width={1000}
            height={1000}
            loading="eager"
            className="size-10 rounded-full"
          />

          <div className="flex flex-col">
            <h3>سجاد ژیانجو</h3>
            <p className="text-[13px] text-gray-600">zhiyanjoo1382@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-end">
        <TeamActions onDelete={onDelete} />
      </div>
    </div>
  );
}
