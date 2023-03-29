module.exports = function () {
  const now = new Date();

  function * range(start, end) { // eslint-disable-line jsdoc/require-jsdoc
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  /**
   * Create an array of years
   *
   * @param {number} startDate - e.g. '2008-09'
   * @param {number} endDate - e.g. '2020-04'
   * @returns {Array} ['2008',…,'2020']
   */
  function generateYears(startDate, endDate) {
    const firstYear = new Date(startDate).getFullYear();
    const lastYear = new Date(endDate).getFullYear();

    return [...range(firstYear, lastYear)].map(String);
  }

  /**
   * Create an array of months
   *
   * @param {string} startDate - e.g. '2008-09'
   * @param {string} endDate - e.g. '2020-04'
   * @returns {string} ['2008-09',…,'2020-01']
   */
  function generateMonths(startDate, endDate) {
    const firstYear = new Date(startDate).getFullYear();
    const firstMonth = new Date(startDate).getMonth() + 1;
    const lastYear = new Date(endDate).getFullYear();
    const lastMonth = new Date(endDate).getMonth() + 1;

    const dates = [];
    const years = [...range(firstYear, lastYear)].map(String);
    for (const [i, year] of years.entries()) {
      let months = [];
      if (i === 0) {
        months = [...range(firstMonth, 12)];
      } else if (i === years.length - 1) {
        months = [...range(1, lastMonth)];
      } else {
        months = [...range(1, 12)];
      }

      months = months.map(month => String(month).padStart(2, '0'));
      for (const month of months) {
        dates.push(`${year}-${month}`);
      }
    }

    return dates;
  }

  // Year archives
  const archivedYears = generateYears('2008-09', now);
  const yearArchives = archivedYears.map(year => ({
    date: new Date(year),
    fileSlug: year,
    url: `/${year}/`,
    data: {
      item_title: year,
      introduction: year,
    },
  }));

  // Month archives
  const archivedMonths = generateMonths('2008-09', now);
  const monthArchives = archivedMonths.map(month => {
    const date = new Date(month);
    const year = date.getFullYear();
    let monthNumber = date.getMonth() + 1;
    monthNumber = String(monthNumber).padStart(2, '0');
    const monthName = Intl.DateTimeFormat('en-GB', {
      month: 'long',
    }).format(date);

    return {
      date,
      fileSlug: monthNumber,
      url: `/${year}/${monthNumber}/`,
      data: {
        date: `${year}-${monthNumber}`,
        item_title: monthName,
        introduction: `${monthName} ${year}`,
      },
    };
  });

  // Other archives
  const otherArchives = [{
    url: '/categories',
    data: {
      title: 'Categories',
      summary: 'Content across the site grouped by common topics.',
    },
  }, {
    url: '/collections',
    data: {
      title: 'Collections',
      summary: 'Curated series of posts covering a particular theme.',
    },
  }, {
    url: 'http://lloydyweb.paulrobertlloyd.com/blog/archive/',
    data: {
      title: '1999-2007',
      summary: 'Content written prior to 2008 can be found on my previous website.',
    },
  }];

  return {
    years: yearArchives.reverse(),
    months: monthArchives,
    other: otherArchives,
  };
};
