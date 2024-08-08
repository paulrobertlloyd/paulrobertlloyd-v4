import { route_map } from "../../lib/utils/route-map.js";

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
    return route_map(article.data.geojson, this.permalink(article.data));
  }
}
