/**
 * Check if date is in a leap year
 * @param {Date} date - Date
 * @returns {boolean} Leap year
 */
export function isLeapYear(date) {
  const year = date.getFullYear();
  return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
}

/**
 * Get number of days in the month for given data
 * @param {Date} date - Date
 * @returns {number} Number of days
 */
export function daysInMonth(date) {
  const feb = isLeapYear(date) ? 29 : 28;
  return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

/**
 * Get day of the year number for given data
 * @param {Date} date - Date
 * @returns {number} Day number
 */
export function getDayOfYear(date) {
  let number_ = 0;
  for (let index = 0; index < date.getMonth(); ++index) {
    number_ += daysInMonth(date)[index];
  }
  return number_ + date.getDate();
}
