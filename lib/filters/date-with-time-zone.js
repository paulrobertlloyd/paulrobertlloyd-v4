import process from "node:process";
import { format, fromZonedTime } from "date-fns-tz";
import { enGB } from "date-fns/locale";

/**
 * Format a date
 * @param {string} string - Date
 * @param {string} timeZone - Desired timezone
 * @param {string} dateFormat - Desired date format
 * @returns {string} Formatted date
 */
export const date_with_time_zone = (
  string,
  timeZone,
  dateFormat = "d MMMM yyyy, h:mm'&nbsp;'aaaaa'm' zzz",
) => {
  const zonedDate = fromZonedTime(string, process.env.TZ);
  return format(zonedDate, dateFormat, {
    locale: enGB,
    timeZone: timeZone || process.env.TZ,
  });
};
