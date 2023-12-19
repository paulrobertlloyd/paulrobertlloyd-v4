import process from "node:process";
import { format, zonedTimeToUtc } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB/index.js";

/**
 * Format a date
 * @param {string} string - Date
 * @param {string} timeZone - Desired timezone
 * @param {string} dateFormat - Desired date format
 * @returns {string} Formatted date
 */
export default (
  string,
  timeZone,
  dateFormat = "d MMMM yyyy, h:mm'&nbsp;'aaaaa'm' zzz",
) => {
  const zonedDate = zonedTimeToUtc(string, process.env.TZ);
  return format(zonedDate, dateFormat, {
    locale: enGB,
    timeZone: timeZone || process.env.TZ,
  });
};
