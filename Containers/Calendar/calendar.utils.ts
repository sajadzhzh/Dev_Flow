import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CalendarDay } from "./calendar.types";

export function getCurrentMonthInfo() {
  const today = new DateObject({
    calendar: persian,
    locale: persian_fa,
  });

  return {
    year: today.year,
    month: today.month.number,
    monthName: today.month.name,
    daysInMonth: today.month.length,
    weekDayIndex: today.weekDay.index,
    today: today.day,
  };
}

function getMonthLength(month: number) {
  if (month <= 6) return 31;

  if (month <= 11) return 30;

  return 29;
}

export function getpreviousMonth(year: number, month: number) {
  if (month === 1) {
    return {
      year: year - 1,
      month: 12,
    };
  }

  return {
    year,
    month: month - 1,
  };
}

export function getnextMonth(year: number, month: number) {
  if (month === 12) {
    return {
      year: year + 1,
      month: 1,
    };
  }

  return {
    year,
    month: month + 1,
  };
}

export function createMonthDays(
  year: number,
  month: number
): CalendarDay[] {

  const current = getCurrentMonthInfo();

  const days: CalendarDay[] = [];

  const currentMonthLength = getMonthLength(month);

  const firstDay = new DateObject({
    calendar: persian,
    locale: persian_fa,
    year,
    month,
    day: 1,
  });

  const weekIndex = firstDay.weekDay.index;

  const prev = getpreviousMonth(year, month);

  const prevLength = getMonthLength(prev.month);

  for (
    let i = prevLength - weekIndex + 1;
    i <= prevLength;
    i++
  ) {
    days.push({
      id: days.length + 1,

      year: prev.year,

      month: prev.month,

      day: i,

      currentMonth: false,

      today: false,
    });
  }

  for (let i = 1; i <= currentMonthLength; i++) {
    days.push({
      id: days.length + 1,

      year,

      month,

      day: i,

      currentMonth: true,

      today:
        current.year === year &&
        current.month === month &&
        current.today === i,
    });
  }

  const next = getnextMonth(year, month);

  let day = 1;

  while (days.length < 42) {
    days.push({
      id: days.length + 1,

      year: next.year,

      month: next.month,

      day,

      currentMonth: false,

      today: false,
    });

    day++;
  }

  return days;
}

export function getMonthName(month: number): string {
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return months[month - 1];
}

export const CalendarDaysMonth = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];