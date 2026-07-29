import Image from "next/image";
import Profile from "@/public/Profile.png";
import TeamActions from "./Actions";

export default function TeamDesktop({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="w-full hidden xl:flex">
      <div className="w-2/8 flex items-center gap-2">
        <Image
          src={Profile}
          alt="Profile"
          width={1000}
          height={1000}
          loading="eager"
          className="size-10 rounded-full"
        />
        سجاد ژیانجو
      </div>

      <div className="w-2/8 flex items-center justify-center">
        zhiyanjoo1382@gmail.com
      </div>

      <div className="w-1/8 flex items-center justify-center">9</div>

      <div className="w-1/8 flex items-center justify-center">5</div>

      <div className="w-1/8 flex items-center justify-center">22:00</div>

      <div className="w-1/8 flex items-center justify-end">
        <TeamActions onDelete={onDelete} />
      </div>
    </div>
  );
}
