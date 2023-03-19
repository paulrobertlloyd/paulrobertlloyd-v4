module.exports = {
  layout: 'note',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
  syndicate: true,
  type_prefix: 'n',
  vocabulary: 'entry',
};
