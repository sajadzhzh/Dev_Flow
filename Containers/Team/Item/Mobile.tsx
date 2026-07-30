import Image from "next/image";
import Profile from "@/public/Profile.png";
import TeamActions from "./Actions";
import Button from "@/Components/ui/Input/Button";

export default function TeamMobile({
  onDelete,
  invite,
}: {
  onDelete?: () => void;
  invite?: boolean;
}) {
  return (
    <div className={`w-full flex ${!invite && "xl:hidden"}`}>
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

      {onDelete && (
        <div className="w-1/3 flex items-center justify-end">
          <TeamActions onDelete={onDelete} />
        </div>
      )}

      {invite && (
        <div className="w-1/3 flex items-center justify-end">
          <Button className="w-full lg:w-max py-2 px-4 bg-[#3b83f665] text-[#3B82F6] rounded-xl cursor-pointer hover:bg-[#3B82F6] hover:text-white">
            دعوت
          </Button>
        </div>
      )}
    </div>
  );
}
