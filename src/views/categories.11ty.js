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
      `{% render 'categories' with collections.category %}`,
      "liquid",
      data,
    );
  }
}
