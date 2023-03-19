module.exports = {
  layout: 'photo',
  permalink: '{{ page.date | date: "%Y/%j" }}/{{ type_prefix }}{{ page.fileSlug }}/',
  syndicate: true,
  type_prefix: 'p',
  vocabulary: 'entry',
};
