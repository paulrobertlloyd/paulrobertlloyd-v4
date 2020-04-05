module.exports = {
  layout: 'project',
  permalink: 'projects/{{ page.fileSlug }}/',
  tags: ['post', 'project'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  eleventyComputed: {
    related: data => {
      const articles = data.collections.article;
      return articles.filter(article => {
        const {category} = article.data;
        if (!category) {
          return false;
        }

        return category.includes(data.title);
      });
    }
  }
};
