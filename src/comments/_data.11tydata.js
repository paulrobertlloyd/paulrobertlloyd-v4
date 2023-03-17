module.exports = {
  layout: 'comments',
  type_prefix: 'c',
  permalink: 'comments/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  visibility: 'unlisted',
  tags: ['comments'],
  vocabulary: 'feed',
};
