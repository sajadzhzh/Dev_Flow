import dayjs from "dayjs";

export function getRemainingDays(
  endDate: Date | string
): number | false {
  const today = dayjs().startOf("day");
  const end = dayjs(endDate).startOf("day");

  const diff = end.diff(today, "day");

  return diff > 0 ? diff : false;
}