module.exports = {
  layout: 'itinerary',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  type_prefix: 'i',
  vocabulary: 'event',
};
