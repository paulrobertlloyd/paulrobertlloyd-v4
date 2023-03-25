module.exports = class Categories {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: 'categories/index.json',
    };
  }

  render({collections}) {
    return JSON.stringify(collections.category, null, 2);
  }
};
