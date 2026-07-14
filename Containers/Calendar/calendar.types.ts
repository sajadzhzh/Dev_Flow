export interface CalendarDay {
  id: number;

  year: number;

  month: number;

  day: number;

  currentMonth: boolean;

  today: boolean;
}

export type Priority = "critical" | "high" | "medium" | "low";

export type Status = "waiting" | "inProccess" | "done" | "suspend";

export interface CalendarEvent {
  id: number;

  title: string;

  description?: string;

  projectId: number;

  projectName: string;

  year: number;

  month: number;

  day: number;

  time: string;

  priority: Priority;

  status: Status;
}