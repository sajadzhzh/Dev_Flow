import { ArrowUp, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type CardColor = "blue" | "green" | "purple" | "orange" | "red";

const variants = {
  blue: {
    bg: "bg-[#3b83f665]",
    text: "text-[#3B82F6]",
  },
  green: {
    bg: "bg-[#22c55e4d]",
    text: "text-[#22C55E]",
  },
  purple: {
    bg: "bg-[#8a5cf65b]",
    text: "text-[#8B5CF6]",
  },
  orange: {
    bg: "bg-[#f59f0b5b]",
    text: "text-[#F59E0B]",
  },
  red: {
    bg: "bg-[#ef44444d]",
    text: "text-[#EF4444]",
  },
};

interface CardProps {
  title: ReactNode;
  value: number | string;
  trend?: number;
  icon: LucideIcon;
  color: CardColor;
}

export default function Card({
  title,
  value,
  trend,
  icon: Icon,
  color,
}: CardProps) {
  const variant = variants[color];

  return (
    <div className="grow min-w-55 rounded-xl border border-gray-600 bg-[#18181B] py-3 px-5">
      <div className="flex items-center justify-between">

        <div className="flex flex-col gap-1">
          <h3 className="text-sm text-gray-400">{title}</h3>

          <p className="text-2xl font-semibold">{value}</p>

          {trend !== undefined && (
            <div className="flex items-center gap-1 text-sm text-[#22C55E]">
              <ArrowUp className="w-4 h-4" />
              {trend} این هفته
            </div>
          )}
        </div>

        <div className={`p-3 rounded-2xl ${variant.bg} ${variant.text}`}>
          <Icon />
        </div>

      </div>
    </div>
  );
}