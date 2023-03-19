module.exports = {
  layout: 'itinerary',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}1/{{ page.fileSlug }}/',
  type_prefix: 'i',
  vocabulary: 'event',
};
