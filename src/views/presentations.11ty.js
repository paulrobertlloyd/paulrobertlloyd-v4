import { postTypes } from "../../lib/post-types.js";

export default class Presentations {
  data() {
    const { listPath } = postTypes.presentation;

    return {
      layout: "pagination.liquid",
      title: "Speaking",
      summary:
        "I speak at events about the web and the culture that surrounds it, often with reference to my interests in politics, architecture and sustainability.",
      featured: {
        collection: "presentation",
        limit: 6,
        title: "Select presentations",
      },
      permalink: listPath,
    };
  }
}
