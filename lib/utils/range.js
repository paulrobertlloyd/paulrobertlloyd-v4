/**
 * Generate range of numbers
 * @param {number} start First number
 * @param {number} end Last number
 * @yields {object} Generator
 */
export function* range(start, end) {
  for (let index = start; index <= end; index++) {
    yield index;
  }
}
