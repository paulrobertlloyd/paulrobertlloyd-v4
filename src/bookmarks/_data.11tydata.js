module.exports = {
  layout: 'bookmark',
  syndicate: true,
  type: 'entry',
  type_prefix: 'b',
  permalink: 'bookmarks/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['bookmark'],
  vocabulary: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  eleventyComputed: {
    summary: '{{ bookmark_of | hostname }}',
    comments(data) {
      const {collections, uid} = data;
      return collections.comments.find(item => {
        const {bookmark_id} = item.data;
        return bookmark_id && bookmark_id === uid;
      });
    },
  },
};
