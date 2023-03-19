module.exports = {
  layout: 'trip',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
  type_prefix: 't',
  visibility: 'unlisted',
  vocabulary: 'event',
};
