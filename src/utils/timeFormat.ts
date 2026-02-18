export function formatStopTimeRange(start?: string | null, end?: string | null) {
  const normalizedStart = (start || "").trim();
  const normalizedEnd = (end || "").trim();
  if (normalizedStart && normalizedEnd) {
    return `${normalizedStart} - ${normalizedEnd}`;
  }
  if (normalizedStart) {
    return normalizedStart;
  }
  if (normalizedEnd) {
    return normalizedEnd;
  }
  return "Sin hora";
}
