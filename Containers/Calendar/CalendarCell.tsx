import { CalendarDay, CalendarEvent } from "./calendar.types";

interface CalendarCellProps {
  day: CalendarDay;

  selected: boolean;

  events: CalendarEvent[];

  onClick: () => void;
}

const priorityColor = {
  critical: "bg-[#8B5CF6]",
  high: "bg-[#3B82F6]",
  medium: "bg-[#F59E0B]",
  low: "bg-[#22C55E]",
};

export default function CalendarCell({
  day,
  selected,
  onClick,
  events,
}: CalendarCellProps) {

  return (
    <button
      onClick={onClick}
      className={`
        min-h-[85px]
        lg:min-h-[110px]
        p-2
        flex
        flex-col
        justify-between
        transition-all
        border

        ${
          day.currentMonth
            ? "bg-[#18181B] border-white/10"
            : "bg-[#101012] text-gray-600 border-white/5"
        }

        ${selected ? "border-[#3B82F6]" : ""}

        hover:border-[#3B82F6]
        hover:bg-[#202024]
      `}
    >
      <span className={`text-[13px] ${day.today ? "text-[#3B82F6] font-bold" : ""}`}>
        {day.day}
      </span>

      <div className="flex items-center gap-1 flex-wrap">
        {events.slice(0, 3).map((event) => (
          <span
            key={event.id}
            className={`size-1.5 lg:size-2 rounded-full ${priorityColor[event.priority]}`}
          />
        ))}

        {events.length > 3 && (
          <span className="text-[10px] text-gray-500">
            +{events.length - 3}
          </span>
        )}
      </div>
    </button>
  );
}
