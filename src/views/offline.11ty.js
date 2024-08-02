export default class Offline {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      layout: "pagination.liquid",
      title: "Offline",
      summary:
        "Your network connection isn’t working right now, and this page is not available offline. Why not read one of the following articles instead?",
      featured: {
        collection: "highlights",
        title: "Articles available to read offline",
        limit: 6,
      },
      permalink: "/offline/",
    };
  }
}
