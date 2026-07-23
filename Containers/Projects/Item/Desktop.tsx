import Profile from "@/public/Profile.png";
import Profile2 from "@/public/smoke.png";
import { Box } from "lucide-react";
import Image from "next/image";
import ProjectActions from "./Actions";
import ProgressLine from "@/Components/Layout/ProgressLine";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}

export default function Desktop({ onEdit, onDelete }: Props) {
  return (
    <div className="hidden xl:flex items-center">
      <div className="w-3/10 flex gap-2 items-center">
        <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
          <Box />
        </div>
        <div>
          <h3>طراحی سایت فروشگاهی</h3>
          <p className="text-small text-gray-500">لورم ایپسوم</p>
        </div>
      </div>

      <div className="w-1/10">
        <div className="py-1 px-2 w-max text-center text-sm bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
          در حال انجام
        </div>
      </div>

      <div className="w-1/10 flex items-center gap-2">
        <ProgressLine percent={75} />
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

      <div className="w-1/10 text-center">1405/04/05</div>

      <div className="w-1/10 text-center">1405/05/05</div>

      <div className="w-1/10 text-end relative">
        <ProjectActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
