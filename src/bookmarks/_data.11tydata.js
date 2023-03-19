module.exports = {
  layout: 'bookmark',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}1/{{ page.fileSlug }}/',
  syndicate: true,
  type_prefix: 'b',
  vocabulary: 'entry',
};
