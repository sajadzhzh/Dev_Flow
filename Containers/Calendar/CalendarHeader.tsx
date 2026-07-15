"use client";

import Button from "@/Components/ui/Input/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  year: number;
  month: string;
  onNext: () => void;
  onPrevious: () => void;
  onToday: () => void;
}

export default function CalendarHeader({
  year,
  month,
  onNext,
  onPrevious,
  onToday,
}: CalendarHeaderProps) {
  return (
    <div className="flex justify-between items-center rounded-xl border border-white/10 bg-[#18181B] px-5 py-4">
      <div className="flex items-center gap-2">
        <Button
          style="cursor-pointer rounded-lg border border-white/10 p-2 hover:bg-[#28282B]"
          onClick={onNext}
        >
          <ChevronRight size={18} />
        </Button>

        <Button
          style="cursor-pointer rounded-lg border border-white/10 p-2 hover:bg-[#28282B]"
          onClick={onPrevious}
        >
          <ChevronLeft size={18} />
        </Button>
      </div>

      <h2 className="font-bold text-lg">
        {month} {year}
      </h2>

      <Button
        onClick={onToday}
        style="cursor-pointer rounded-xl bg-[#3b83f633] px-4 py-2 text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
      >
        امروز
      </Button>
    </div>
  );
}
