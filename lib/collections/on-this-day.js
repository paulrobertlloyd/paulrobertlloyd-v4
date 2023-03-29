const now = new Date();
const month = String(now.getUTCMonth() + 1).padStart(2, '0');
const day = String(now.getUTCDate()).padStart(2, '0');

module.exports = collection =>
  collection.getFilteredByGlob('src/content/**/*.markdown')
    .filter(item => item.data.visibility !== 'unlisted')
    .filter(item => item.date.toISOString().includes(`-${month}-${day}`))
    .reverse();
