import { getDayOfYear } from "../../lib/utils/date.js";

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
    const date = new Date(article.data.date);
    const year = date.getFullYear();
    const day = String(getDayOfYear(date)).padStart(3, "0");
    const outputDirectory = `${year}/${day}/a1/`;

    return this.route_map(article.data.geojson, outputDirectory);
  }
}
