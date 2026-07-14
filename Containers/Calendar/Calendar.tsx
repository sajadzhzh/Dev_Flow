"use client";

import { useState } from "react";

import CalendarHeader from "./CalendarHeader";
import { CalendarDay } from "./calendar.types";
import CalendarGrid from "./CalendarGrid";
import {
  createMonthDays,
  getCurrentMonthInfo,
  getMonthName,
  getnextMonth,
  getpreviousMonth,
} from "./calendar.utils";
import { groupEvents } from "./calendar.helpers";
import { calendarEvents } from "./calendar.data";

export default function CalendarSelf() {
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const current = getCurrentMonthInfo();

  const [year, setYear] = useState(current.year);
  const [month, setMonth] = useState(current.month);

  const days = createMonthDays(year, month);
  const eventsMap = groupEvents(calendarEvents);

  const previousMonth = () => {
    const prev = getpreviousMonth(year, month);

    setYear(prev.year);
    setMonth(prev.month);
  };

  const nextMonth = () => {
    const next = getnextMonth(year, month);

    setYear(next.year);
    setMonth(next.month);
  };

  return (
    <div className="flex flex-col gap-3">
      <CalendarHeader
        year={year}
        month={getMonthName(month)}
        onNext={nextMonth}
        onPrevious={previousMonth}
      />

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="lg:w-3/4">
          <CalendarGrid
            days={days}
            eventsMap={eventsMap}
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
        </div>

        <div className="lg:w-1/4">
          {/* <EventPanel
            selectedDay={selectedDay}
          /> */}
        </div>
      </div>
    </div>
  );
}
