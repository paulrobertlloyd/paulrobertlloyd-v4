import { tokenize } from "../../lib/utils/tokenize.js";

export default class Search {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "archives/search.json",
    };
  }

  render({ collections }) {
    const search = collections.publicVisibility.map((item) => ({
      title: item.data.page_title,
      content: tokenize(item.content),
      url: item.url,
    }));

    return JSON.stringify(search, undefined, 2);
  }
}
