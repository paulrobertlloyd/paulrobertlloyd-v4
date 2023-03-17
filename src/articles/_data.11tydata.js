module.exports = {
  layout: 'article',
  syndicate: true,
  type: 'entry',
  type_prefix: 'a',
  type_index: 1,
  permalink: 'articles/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['article'],
  vocab: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  },
  duotoneCardImage: true,
  eleventyComputed: {
    comments(data) {
      const {collections, uid} = data;
      return collections.comments.find(item => {
        const {article_id} = item.data;
        return article_id && article_id === uid;
      });
    },
  },
};
