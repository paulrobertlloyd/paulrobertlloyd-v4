import { range } from "../../lib/utils/generator.js";
import { getPost } from "../../lib/utils/post.js";
import { long } from "../../lib/utils/post-path.js";
import { postTypes } from "../../lib/post-types.js";

export default class Redirects {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "_redirects",
    };
  }

  render({ collections, currentYear }) {
    const redirects = ["/favicon.ico /assets/icons/favicon.ico 200"];

    // Archives
    for (const year of range(1999, currentYear)) {
      redirects.push(`/${year}/:splat /${year} 302`);
    }

    // Post types whose permalink ends in a slug redirect from short path
    for (const [type, { path }] of Object.entries(postTypes)) {
      if (path !== long) {
        continue;
      }

      const collection = collections[type] ?? [];

      for (const page of collection) {
        redirects.push(`/${getPost(page.data).shortPath} ${page.url} 302`);
      }
    }

    // Paginated lists
    redirects.push("/:section/ page=:p /:section/page/:p.html 200!");

    return redirects.join("\n");
  }
}
