module.exports = {
  layout: 'comments',
  type: 'comments',
  type_prefix: 'c',
  permalink: 'comments/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  visibility: 'unlisted',
  tags: ['comments'],
  vocab: 'feed',
};
