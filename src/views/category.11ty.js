import { pluralise } from "../../lib/utils/string.js";

/**
 * Group posts into a page per category, alphabetically
 *
 * A post can carry several categories, so posts are pushed into every group
 * they belong to rather than grouped by a single key.
 * @param {Array} items - Public posts, newest first
 * @returns {Array<object>} Pages
 */
const byCategory = (items) => {
  const grouped = new Map();

  for (const item of items) {
    const categories = item.data.category ?? [];

    for (const tag of categories) {
      const posts = grouped.get(tag) ?? [];

      posts.push(item);
      grouped.set(tag, posts);
    }
  }

  return [...grouped].map(([tag, posts]) => ({
    tag,
    posts,
    permalink: `/categories/${tag}/`,
  }));
};

export default class Category {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Categories",
      pagination: {
        data: "collections.publicVisibility",
        size: 1,
        alias: "archive",
        before: byCategory,
      },
      eleventyComputed: {
        pagination: ({ archive }) => ({ items: archive.posts }),
        pageTitle: ({ archive }) => `Posts tagged ‘${archive.tag}’`,
        sectionTitle: ({ archive }) =>
          `Tagged ‘${archive.tag}’ (${pluralise(archive.posts.length, "post")})`,
      },
      permalink: ({ archive }) => archive.permalink,
    };
  }
}
