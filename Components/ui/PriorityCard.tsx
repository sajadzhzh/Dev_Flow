"use client";

import { AlertTriangle, Wifi, WifiHigh, WifiLow } from "lucide-react";

export type Priority = "critical" | "high" | "medium" | "low";

interface PrioritySelectorProps {
  value: Priority;
  onChange: (value: Priority) => void;
}

const priorities = [
  {
    value: "critical",
    title: "حیاتی",
    color: "border-[#8B5CF6] bg-[#8b5cf620] text-[#8B5CF6]",
    icon: AlertTriangle,
  },
  {
    value: "high",
    title: "بالا",
    color: "border-[#3B82F6] bg-[#3b82f620] text-[#3B82F6]",
    icon: Wifi,
  },
  {
    value: "medium",
    title: "متوسط",
    color: "border-[#F59E0B] bg-[#f59e0b20] text-[#F59E0B]",
    icon: WifiHigh,
  },
  {
    value: "low",
    title: "پایین",
    color: "border-[#22C55E] bg-[#22c55e20] text-[#22C55E]",
    icon: WifiLow,
  },
] as const;

export default function PrioritySelector({
  value,
  onChange,
}: PrioritySelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px]">اولویت پروژه</label>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {priorities.map((priority) => {
          const Icon = priority.icon;
          const active = value === priority.value;

          return (
            <button
              key={priority.value}
              type="button"
              onClick={() => onChange(priority.value)}
              className={`rounded-xl border p-4 transition-all cursor-pointer
                ${
                  active
                    ? `${priority.color} scale-[1.02]`
                    : "border-gray-600 bg-[#18181B] hover:border-gray-400"
                }
              `}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon className="size-6" />

                <span className="text-sm font-medium">{priority.title}</span>
                {active && (
                  <input
                    id="priority"
                    name="priority"
                    type="hidden"
                    value={priority.value}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
