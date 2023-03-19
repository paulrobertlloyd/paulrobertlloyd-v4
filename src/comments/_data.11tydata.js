module.exports = {
  layout: 'comments',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}1/{{ page.fileSlug }}/',
  type_prefix: 'c',
  visibility: 'unlisted',
  vocabulary: 'feed',
};
