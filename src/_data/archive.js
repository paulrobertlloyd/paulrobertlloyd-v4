module.exports = function () {
  function * range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  function generateMonths(years, currentMonth) {
    const dates = [];
    years.forEach((year, i) => {
      let months = [];
      if (i === 0) {
        months = [...range(9, 12)];
      } else if (i === years.length - 1) {
        months = [...range(1, currentMonth)];
      } else {
        months = [...range(1, 12)];
      }

      months = months.map(month => String(month).padStart(2, '0'));
      months.forEach(month => dates.push(`${year}-${month}`));
    });

    return dates;
  }

  // Get most recent year and month to include in archive
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  // Years array (e.g. ['2008',…,'2020'])
  const years = [...range(2008, currentYear)].map(String);

  // Months array (e.g. ['2008-09',…,'2020-01'])
  const months = generateMonths(years, currentMonth);

  return {
    years,
    months
  };
};
