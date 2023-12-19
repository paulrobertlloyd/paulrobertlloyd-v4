export default class Categories {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "categories/index.json",
    };
  }

  render({ collections }) {
    return JSON.stringify(collections.category, undefined, 2);
  }
}
