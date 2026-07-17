import { Box } from "lucide-react";

const variants = {
  high: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
  },
  low: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
  },
  critical: {
    bg: "bg-[#8a5cf65b]",
    text: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]",
  },
  mid: {
    bg: "bg-[#f59f0b5b]",
    text: "text-[#F59E0B]",
    border: "border-[#F59E0B]",
  },
};

export default function CardItem({
  priority,
  name,
  lastUpdate,
  percent,
}: {
  priority: "critical" | "high" | "mid" | "low";
  name: string;
  lastUpdate: string;
  percent: number;
}) {
  const variant = variants[priority];

  return (
    <>
      <div className="flex items-center justify-between gap-2 my-2 flex-wrap">
        <div className="flex gap-2">
          <div className={`p-3 ${variant.bg} ${variant.text} rounded-2xl`}>
            <Box />
          </div>

          <div className="flex-col gap-2 text-sm lg:text-md">
            {name}
            <div className="text-gray-500 text-sm">
              آخرین بروزرسانی : {lastUpdate} ساعت پیش
            </div>
          </div>
        </div>
        <div className="grow min-w-1/2 h-max border-b-2 border-gray-700 rounded relative mt-2">
          <p className="absolute left-0 -top-5">{percent}%</p>
          <div
            className={`w-[50%] absolute left-0 top-0 border-t-2 ${variant.border} h-max rounded`}
          ></div>
        </div>
      </div>
    </>
  );
}
