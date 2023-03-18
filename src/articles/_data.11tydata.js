module.exports = {
  layout: 'article',
  permalink: 'articles/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  syndicate: true,
  type_index: 1,
  type_prefix: 'a',
  vocabulary: 'entry',
};
