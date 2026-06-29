export function getRemainingDays(endDate: Date): number | false {
  const diff = endDate.getTime() - Date.now();

  if (diff <= 0) return false;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}