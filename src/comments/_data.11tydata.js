module.exports = {
  layout: 'comments',
  permalink: 'comments/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  type_prefix: 'c',
  visibility: 'unlisted',
  vocabulary: 'feed',
};
