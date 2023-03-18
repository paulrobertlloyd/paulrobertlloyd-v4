module.exports = {
  layout: 'bookmark',
  permalink: 'bookmarks/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  syndicate: true,
  type_prefix: 'b',
  vocabulary: 'entry',
};
