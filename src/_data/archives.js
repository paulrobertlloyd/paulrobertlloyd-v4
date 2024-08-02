const now = new Date();

/**
 * Generate range of numbers
 * @param {number} start First number
 * @param {number} end Last number
 * @yields {object} Generator
 */
function* _range(start, end) {
  for (let index = start; index <= end; index++) {
    yield index;
  }
}

/**
 * Create an array of years
 * @param {number} startDate - e.g. '2008-09'
 * @param {number} endDate - e.g. '2020-04'
 * @returns {Array} ['2008',…,'2020']
 */
function _generateYears(startDate, endDate) {
  const firstYear = new Date(startDate).getFullYear();
  const lastYear = new Date(endDate).getFullYear();

  return [..._range(firstYear, lastYear)].map(String);
}

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default () => {
  // Year archives
  const archivedYears = _generateYears("2008-09", now);
  const yearArchives = archivedYears.map((year) => ({
    date: new Date(year),
    fileSlug: year,
    url: `/${year}/`,
    data: {
      item_title: year,
      introduction: year,
    },
  }));

  // Other archives
  const otherArchives = [
    {
      url: "/categories",
      data: {
        title: "Categories",
        summary: "Content across the site grouped by common topics.",
      },
    },
    {
      url: "/collections",
      data: {
        title: "Collections",
        summary: "Curated series of posts covering a particular theme.",
      },
    },
    {
      url: "http://lloydyweb.paulrobertlloyd.com/blog/archive/",
      data: {
        title: "1999-2007",
        summary:
          "Content written prior to 2008 can be found on my previous website.",
      },
    },
  ];

  return {
    years: yearArchives.reverse(),
    other: otherArchives,
  };
};
