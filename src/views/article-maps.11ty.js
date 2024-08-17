export default class ArticleMaps {
  data() {
    return {
      pagination: {
        data: "collections.article",
        size: 1,
        alias: "article",
        before: (items) => items.filter((item) => item.data.geojson),
      },
      permalink: false,
    };
  }

  render({ article }) {
    const source = this.mapbox_url(article.data.geojson);
    return this.image(source, this.permalink(article.data), "route_map");
  }
}
