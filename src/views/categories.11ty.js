export default class Categories {
  data() {
    return {
      layout: "index.liquid",
      title: "Categories",
      summary: "Content across the site grouped by common topics.",
      tags: ["archive"],
      permalink: "categories/",
    };
  }

  async render(data) {
    return await this.renderTemplate(
      `<list-categories :categories="collections.category"></list-categories>`,
      "webc",
      data,
    );
  }
}
