const variants = {
  high: {
    bg: "bg-[#3b83f63a]",
    text: "text-[#3B82F6]",
    border: "border-[#3B82F6]",
    value: "بالا"
  },
  low: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
    border: "border-[#22C55E]",
    value: "پائین"
  },
  critical: {
    bg: "bg-[#8a5cf648]",
    text: "text-[#8B5CF6]",
    border: "border-[#8B5CF6]",
    value: "حیاتی"
  },
  mid: {
    bg: "bg-[#f59f0b5b]",
    text: "text-[#F59E0B]",
    border: "border-[#F59E0B]",
    value: "متوسط"
  },
};

export default function TodaysTasks({
  name,
  project,
  priority,
}: {
  name: string;
  project: string;
  priority: "critical" | "high" | "mid" | "low";
}) {
  const variant = variants[priority];
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 border-b border-gray-800 p-2">
      <div className="border-2 rounded border-[#8B5CF6]"></div>
      <p className="text-sm">{name}</p>

      <div className="ms-auto lg:ms-3 px-3 py-1 text-small bg-[#3b83f63a] text-[#3B82F6] border border-[#3B82F6] rounded-2xl">
        {project}
      </div>
      <div
        className={`ms-auto lg:me-10 px-3 py-1 text-small ${variant.bg} ${variant.text} ${variant.border} border rounded-2xl`}
      >
        {variant.value}
      </div>
    </div>
  );
}
