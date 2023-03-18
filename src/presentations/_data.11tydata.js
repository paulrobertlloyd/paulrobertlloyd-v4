module.exports = {
  layout: 'presentation',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  syndicate: true,
  type_prefix: 's',
  vocabulary: 'entry',
};
