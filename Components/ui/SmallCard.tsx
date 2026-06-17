import { ArrowUp, Clock, Folder, FolderOpen, Folders, SquareCheck, SquarePause, Users } from "lucide-react";
import { ReactNode } from "react";

export default function Card({
  type,
  children,
}: {
  children: ReactNode;
  type: "project" | "task" | "team" | "report" | "suspend" | "doing" | "allProjects" | "done";
}) {
  return (
    <div className="grow min-w-60 border border-gray-600 bg-[#18181B] rounded-xl py-3 px-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
            <h3 className="text-sm text-gray-400">{children}</h3>
            <p className="text-2xl">12</p>
            <div className="text-[#22C55E] text-small flex items-center gap-1">
                <ArrowUp className="w-4"/>
                2 این هفته
            </div>
        </div>
        

        {type === "project" && (
          <div className="p-3 bg-[#8a5cf65b] text-[#8B5CF6] rounded-2xl">
            <Folder />
          </div>
        )}
        {type === "team" && (
          <div className="p-3 bg-[#3b83f665] text-[#3B82F6] rounded-2xl">
            <Users />
          </div>
        )}
        {type === "task" && (
          <div className="p-3 bg-[#22c55e4d] text-[#22C55E] rounded-2xl">
            <SquareCheck />
          </div>
        )}
        {type === "report" && (
          <div className="p-3 bg-[#f59f0b5b] text-[#F59E0B] rounded-2xl">
            <Clock />
          </div>
        )}
        {type === "suspend" && (
          <div className="p-3 bg-[#f59f0b5b] text-[#F59E0B] rounded-2xl">
            <SquarePause />
          </div>
        )}
        {type === "doing" && (
          <div className="p-3 bg-[#3b83f665] text-[#3B82F6] rounded-2xl">
            <FolderOpen />
          </div>
        )}
        {type === "allProjects" && (
          <div className="p-3 bg-[#8a5cf65b] text-[#8B5CF6] rounded-2xl">
            <Folders />
          </div>
        )}
        {type === "done" && (
          <div className="p-3 bg-[#22c55e4d] text-[#22C55E] rounded-2xl">
            <SquareCheck />
          </div>
        )}
      </div>
    </div>
  );
}
