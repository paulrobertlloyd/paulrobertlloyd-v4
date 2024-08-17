/**
 * Yield an array chunked into arrays of specified size
 * @generator
 * @param {Array} array - Array to split
 * @param {number} n - Size of each chunk
 * @yields {Array} Chunk of the original array
 */
export function* chunk(array, n) {
  for (let index = 0; index < array.length; index += n) {
    yield array.slice(index, index + n);
  }
}

/**
 * Yield a range of numbers
 * @param {number} start First number
 * @param {number} end Last number
 * @yields {number} Number in range
 */
export function* range(start, end) {
  for (let index = start; index <= end; index++) {
    yield index;
  }
}
