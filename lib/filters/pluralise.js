/**
 * Get the plural form for an item for a given number of items.
 * Works for English words only.
 * @see {@link http://blog.gnclmorais.com/simple-pluralise-in-javascript}
 * @example
 * pluralise(1, 'mouse') // 1 mouse
 * pluralise(2, 'house') // 2 houses
 * pluralise(2, 'house', { number: false }) // houses
 * pluralise(2, 'mouse', { plural: 'mice' }) // 2 mice
 * pluralise(2, 'mouse', { plural: 'mice', number: false }) // mice
 * @param {number} count - Number of items
 * @param {string} singular - Singular form
 * @param {object} [options] - Options
 * @param {string} options.plural - Plural form
 * @param {boolean} options.number - Output number alongside word
 * @returns {string} Plural form for `count`
 */
export const pluralise = (count, singular, { plural, number } = {}) => {
  const message = count === 1 ? singular : plural || `${singular}s`;

  return number === false ? message : `${count} ${message}`;
};
