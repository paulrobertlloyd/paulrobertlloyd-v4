module.exports = {
  layout: 'reply',
  permalink: 'replies/{{ page.fileSlug }}/',
  type_prefix: 'r',
  visibility: 'unlisted',
  vocabulary: 'entry',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
};
