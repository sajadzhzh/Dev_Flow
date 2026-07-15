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
import EventPanel from "./EventPanel";

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

  const goToToday = () => {
    setYear(current.year);
    setMonth(current.month);

    setSelectedDay({
      id: -1,
      year: current.year,
      month: current.month,
      day: current.today,
      currentMonth: true,
      today: true,
    });
  };

  const selectedEvents = selectedDay
    ? (eventsMap[
        `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`
      ] ?? [])
    : [];

  return (
    <div className="flex flex-col gap-3">
      <CalendarHeader
        year={year}
        month={getMonthName(month)}
        onNext={nextMonth}
        onPrevious={previousMonth}
        onToday={goToToday}
      />

      <div className="flex flex-col lg:flex-row gap-3">
        <div className="lg:w-2/3">
          <CalendarGrid
            days={days}
            eventsMap={eventsMap}
            selectedDay={selectedDay}
            onSelect={setSelectedDay}
          />
        </div>

        <div className="lg:w-1/3">
          <EventPanel day={selectedDay} events={selectedEvents} />
        </div>
      </div>
    </div>
  );
}
