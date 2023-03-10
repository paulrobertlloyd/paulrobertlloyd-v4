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
   * @param {number} startDate e.g. '2008-09'
   * @param {number} endDate e.g. '2020-04'
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
   * @param {string} startDate e.g. '2008-09'
   * @param {string} endDate e.g. '2020-04'
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
      introduction: year,
    },
  }));

  // Month archives
  const archivedMonths = generateMonths('2008-09', now);
  const monthArchives = archivedMonths.map(month => {
    const date = new Date(month);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const year = date.getFullYear();
    let monthNumber = date.getMonth() + 1;
    monthNumber = String(monthNumber).padStart(2, '0');
    const monthName = monthNames[date.getMonth()];

    return {
      date,
      fileSlug: monthNumber,
      url: `/${year}/${monthNumber}/`,
      data: {
        date: `${year}-${monthNumber}`,
        itemTitle: monthName,
        introduction: `${monthName} ${year}`,
      },
    };
  });

  const collections = [{
    title: 'Australasia 2009',
    summary: 'Ending the decade down under, visiting Auckland, Wellington, Picton and Nelson in New Zealand before heading to Sydney and Melbourne in Australia.',
  }, {
    title: 'Designing Systems',
    summary: 'A three-part essay based on the talk I gave at Smashing Conference in 2016.',
  }, {
    title: 'Lockdown on the run',
    summary: 'Photos from my runs during the lockdown of 2020.',
    content: 'From 23 March 2020, people in the UK were asked to stay at home to prevent the spread of COVID-19. However, one form of exercise a day was permitted. These are photos taken on my runs around Brighton during this period.',
    itemsModifier: 'photos',
  }, {
    title: 'Look to Europe',
    summary: 'In the countdown to Britain leaving the European Union, during January 2020 I shared 31 images from my travels around Europe.',
    content: 'Of the countries I’ve visited, many are members of the EU while some are members of its related institutions and agreements. Throughout, I’ve learnt that we have more in common than that which divides us, and realised that I am and always will be, culturally and emotionally, European.',
    itemsModifier: 'photos',
  }, {
    title: 'North America 2008',
    summary: 'Seattle, Chicago and Washington, D.C, and a brief return to San Francisco.',
  }, {
    title: 'North America 2011',
    summary: 'Washington, D.C. to San Francisco via the Canadian cities of Ottawa, Toronto and Vancouver.',
  }, {
    title: 'Scandinavian sojourn',
    summary: 'A travelogue of my two week trip across Scandinavia in January and February 2020.',
  }, {
    title: 'Stay at home',
    summary: 'During January 2021, I shared 31 images from my travels around the UK.',
    content: 'Following [the series of photos taken from my travels around Europe](/collections/look_to_europe/) that I published in January 2020, I did something similar in January 2021, this time sharing photos from my adventures around the UK.',
    itemsModifier: 'photos',
  }, {
    title: 'The West Pier',
    summary: 'Photos of an iconic Brighton view.',
    itemsModifier: 'photos',
  }, {
    title: 'Weeknotes',
    summary: 'Irregular weekly recaps.',
  }];

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
      summary: 'Curated series of articles, each covering a particular theme.',
    },
  }, {
    url: 'http://lloydyweb.paulrobertlloyd.com/blog/archive/',
    data: {
      title: '1999-2007',
      summary: 'Content written prior to 2008 can be found on my previous website.',
    },
  }];

  return {
    collections,
    years: yearArchives,
    months: monthArchives,
    other: otherArchives,
  };
};
