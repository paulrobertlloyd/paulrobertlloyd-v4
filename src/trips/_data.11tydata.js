module.exports = {
  layout: 'trip',
  type_prefix: 't',
  visibility: 'unlisted',
  vocabulary: 'event',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
};
