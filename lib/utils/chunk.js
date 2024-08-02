/**
 * Splits an array into chunks of a specified size.
 * @generator
 * @param {Array} array - Array to split
 * @param {number} n - Size of each chunk
 * @yields {Array} Chunk of the original array
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8];
 * const chunkGenerator = chunks(array, 3);
 * for (let chunk of chunkGenerator) {
 *   console.log(chunk);
 * }
 * // Output: [1, 2, 3]
 * //         [4, 5, 6]
 * //         [7, 8]
 */
export function* chunk(array, n) {
  for (let index = 0; index < array.length; index += n) {
    yield array.slice(index, index + n);
  }
}
