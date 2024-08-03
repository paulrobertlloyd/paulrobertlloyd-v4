import { range } from "../../lib/utils/range.js";

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

    // Articles (slug-less)
    for (const page of collections.article) {
      redirects.push(`/${this.permalink(page.data)} ${page.url} 302`);
    }

    // Bookmarks (slug-less)
    for (const page of collections.bookmark) {
      redirects.push(`/${this.permalink(page.data)} ${page.url} 302`);
    }

    // Comments (slug-less)
    for (const page of collections.comments) {
      redirects.push(`/${this.permalink(page.data)} ${page.url} 302`);
    }

    // Itineraries (slug-less)
    for (const page of collections.itinerary) {
      redirects.push(`/${this.permalink(page.data)} ${page.url} 302`);
    }

    // Presentations (slug-less)
    for (const page of collections.presentation) {
      redirects.push(`/${this.permalink(page.data)} ${page.url} 302`);
    }

    return redirects.join("\n");
  }
}
