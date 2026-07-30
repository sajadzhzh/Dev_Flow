import { Activity } from "lucide-react";

const variants = {
  high: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
  },
  low: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
  },
  critical: {
    bg: "bg-[#8a5cf65b]",
    text: "text-[#8B5CF6]",
  },
  mid: {
    bg: "bg-[#f59f0b5b]",
    text: "text-[#F59E0B]",
  },
};

export default function TaskTableItem({
  name,
  priority,
}: {
  name: string;
  priority: "critical" | "high" | "mid" | "low";
}) {
  const variant = variants[priority];
  return (
    <div className="flex items-center justify-between gap-2 my-2 flex-wrap">
      <div className="flex gap-4">
        <div className={`p-3 ${variant.bg} ${variant.text} rounded-2xl`}>
          <Activity />
        </div>
        <div className="flex flex-col flex-wrap justify-center text-sm lg:text-md">
          <p className="max-w-80">{name}</p>
        </div>
      </div>
    </div>
  );
}
