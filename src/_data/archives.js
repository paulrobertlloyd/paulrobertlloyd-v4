const now = new Date();

/**
 * Generate range of numbers
 *
 * @param {number} start First number
 * @param {number} end Last number
 * @yields {object} Generator
 */
function * _range(start, end) {
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
function _generateYears(startDate, endDate) {
  const firstYear = new Date(startDate).getFullYear();
  const lastYear = new Date(endDate).getFullYear();

  return [..._range(firstYear, lastYear)].map(String);
}

/**
 * Create an array of months
 *
 * @param {string} startDate - e.g. '2008-09'
 * @param {string} endDate - e.g. '2020-04'
 * @returns {string} ['2008-09',…,'2020-01']
 */
function _generateMonths(startDate, endDate) {
  const firstYear = new Date(startDate).getFullYear();
  const firstMonth = new Date(startDate).getMonth() + 1;
  const lastYear = new Date(endDate).getFullYear();
  const lastMonth = new Date(endDate).getMonth() + 1;

  const dates = [];
  const years = [..._range(firstYear, lastYear)].map(String);
  for (const [i, year] of years.entries()) {
    let months = [];
    if (i === 0) {
      months = [..._range(firstMonth, 12)];
    } else if (i === years.length - 1) {
      months = [..._range(1, lastMonth)];
    } else {
      months = [..._range(1, 12)];
    }

    months = months.map(month => String(month).padStart(2, '0'));
    for (const month of months) {
      dates.push(`${year}-${month}`);
    }
  }

  return dates;
}

module.exports = function () {
  // On this day
  const on_this_day = [{
    url: '/archives/on_this_day',
    data: {
      title: Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
      }).format(now),
    },
  }];

  // Year archives
  const archivedYears = _generateYears('2008-09', now);
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
  const archivedMonths = _generateMonths('2008-09', now);
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
    on_this_day,
    years: yearArchives.reverse(),
    months: monthArchives,
    other: otherArchives,
  };
};
