import { getTokens } from "../../lib/utils/string.js";

export default class Search {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "archives/search.json",
    };
  }

  render({ collections }) {
    const search = collections.publicVisibility.map((item) => ({
      title: item.data.pageTitle,
      content: getTokens(item.content),
      url: item.url,
    }));

    return JSON.stringify(search, undefined, 2);
  }
}
