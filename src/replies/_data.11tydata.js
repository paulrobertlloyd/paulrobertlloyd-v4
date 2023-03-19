module.exports = {
  layout: 'reply',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
  type_prefix: 'r',
  visibility: 'unlisted',
  vocabulary: 'entry',
};
