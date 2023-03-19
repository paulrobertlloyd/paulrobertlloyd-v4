module.exports = {
  layout: 'article',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}1/{{ page.fileSlug }}/',
  syndicate: true,
  type_index: 1,
  type_prefix: 'a',
  vocabulary: 'entry',
};
