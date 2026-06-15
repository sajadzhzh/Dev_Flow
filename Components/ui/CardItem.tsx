import { Box } from "lucide-react";

export default function CardItem({
  priority,
  name,
  lastUpdate,
  percent
}: {
  priority: "critical" | "high" | "mid" | "low";
  name: string;
  lastUpdate: string;
  percent: number;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-2 my-2 flex-wrap">
        <div className="flex gap-2">
          {priority === "critical" && (
            <div className="p-3 bg-[#8a5cf65b] text-[#8B5CF6] rounded-2xl">
              <Box />
            </div>
          )}
          {priority === "high" && (
            <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              <Box />
            </div>
          )}
          {priority === "mid" && (
            <div className="p-3 bg-[#f59f0b62] text-[#F59E0B] rounded-2xl">
              <Box />
            </div>
          )}
          {priority === "low" && (
            <div className="p-3 bg-[#22c55e62] text-[#22C55E] rounded-2xl">
              <Box />
            </div>
          )}

          <div className="flex-col gap-2 text-sm lg:text-md">
            {name}
            <div className="text-gray-500 text-sm">
              آخرین بروزرسانی : {lastUpdate} ساعت پیش
            </div>
          </div>
        </div>
        <div className="grow min-w-1/2 h-max border-b-2 border-gray-700 rounded relative mt-2">
          <p className="absolute left-0 -top-5">{percent}%</p>
          {priority === "critical" && (
            <div className="w-[50%] absolute left-0 top-0 border-t-2 border-[#8B5CF6] h-max rounded"></div>
          )}
          {priority === "high" && (
            <div className="w-[50%] absolute left-0 top-0 border-t-2 border-[#3B82F6] h-max rounded"></div>
          )}
          {priority === "mid" && (
            <div className="w-[50%] absolute left-0 top-0 border-t-2 border-[#F59E0B] h-max rounded"></div>
          )}
          {priority === "low" && (
            <div className="w-[50%] absolute left-0 top-0 border-t-2 border-[#22C55E] h-max rounded"></div>
          )}
        </div>
      </div>
    </>
  );
}
