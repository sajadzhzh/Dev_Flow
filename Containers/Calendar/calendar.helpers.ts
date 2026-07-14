import { CalendarEvent } from "./calendar.types";

export function groupEvents(events: CalendarEvent[]) {
  return events.reduce<Record<string, CalendarEvent[]>>((acc, event) => {
    const key = `${event.year}-${event.month}-${event.day}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(event);

    return acc;
  }, {});
}