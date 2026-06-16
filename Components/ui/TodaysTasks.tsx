export default function TodaysTasks({
  name,
  project,
  priority,
}: {
  name: string;
  project: string;
  priority: "critical" | "high" | "mid" | "low";
}) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 border-b border-gray-800 p-2">
      <div className="border-2 rounded border-[#8B5CF6]"></div>
      <p className="text-sm">{name}</p>

      <div className="ms-auto lg:ms-3 px-3 py-1 text-small bg-[#3b83f63a] text-[#3B82F6] border border-[#3B82F6] rounded-2xl">
        {project}
      </div>
      {priority === "critical" && (
        <div className="ms-auto lg:me-10 px-3 py-1 text-small bg-[#8a5cf634] text-[#8B5CF6] border border-[#8B5CF6] rounded-2xl">
          اولویت حیاتی
        </div>
      )}
      {priority === "high" && (
        <div className="ms-auto lg:me-10 px-3 py-1 text-small bg-[#3b83f662] text-[#3B82F6] border border-[#3B82F6] rounded-2xl">
          اولویت بالا
        </div>
      )}
      {priority === "mid" && (
        <div className="ms-auto lg:me-10 px-3 py-1 text-small bg-[#f59f0b62] text-[#F59E0B] border border-[#F59E0B] rounded-2xl">
          اولویت متوسط
        </div>
      )}
      {priority === "low" && (
        <div className="ms-auto lg:me-10 px-3 py-1 text-small bg-[#22c55e62] text-[#22C55E] border border-[#22C55E] rounded-2xl">
          اولویت پایین
        </div>
      )}
    </div>
  );
}
