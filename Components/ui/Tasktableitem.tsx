import { Activity } from "lucide-react";

export default function TaskTableItem({
  name,
  priority,
}: {
  name: string;
  priority: "critical" | "high" | "mid" | "low";
}) {
  return (
    <div className="flex items-center justify-between gap-2 my-2 flex-wrap">
      <div className="flex gap-4">
        {priority === "critical" && (
            <div className="p-3 bg-[#8a5cf65b] text-[#8B5CF6] rounded-2xl">
              <Activity />
            </div>
          )}
          {priority === "high" && (
            <div className="p-3 bg-[#3b83f662] text-[#3B82F6] rounded-2xl">
              <Activity />
            </div>
          )}
          {priority === "mid" && (
            <div className="p-3 bg-[#f59f0b62] text-[#F59E0B] rounded-2xl">
              <Activity />
            </div>
          )}
          {priority === "low" && (
            <div className="p-3 bg-[#22c55e62] text-[#22C55E] rounded-2xl">
              <Activity />
            </div>
          )}
        <div className="flex flex-col flex-wrap justify-center text-sm lg:text-md">
          <p className="max-w-80">{name}</p>
        </div>
      </div>
    </div>
  );
}
