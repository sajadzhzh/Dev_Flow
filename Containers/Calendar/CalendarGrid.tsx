"use client";

import CalendarCell from "./CalendarCell";
import { CalendarDay, CalendarEvent } from "./calendar.types";

interface CalendarGridProps {
  days: CalendarDay[];
  eventsMap: Record<string, CalendarEvent[]>;
  selectedDay: CalendarDay | null;
  onSelect: (day: CalendarDay) => void;
}

const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

export default function CalendarGrid({
  days,
  selectedDay,
  onSelect,
  eventsMap,
}: CalendarGridProps) {
  return (
    <div className="bg-[#18181B] border border-white/10 rounded-xl overflow-hidden">

      <div className="grid grid-cols-7 border-b border-white/10">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-[10px] font-medium text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>


      <div className="grid grid-cols-7 gap-px bg-white/10">
        {days.map((day) => {
          const eventKey = `${day.year}-${day.month}-${day.day}`;

          return (
            <CalendarCell
              key={day.id}
              day={day}
              events={eventsMap[eventKey] ?? []}
              selected={
                selectedDay?.year === day.year &&
                selectedDay?.month === day.month &&
                selectedDay?.day === day.day
              }
              onClick={() => onSelect(day)}
            />
          );
        })}
      </div>
    </div>
  );
}
