const { absoluteUrl } = require("@11ty/eleventy-plugin-rss");

module.exports = {
  absolute_url: absoluteUrl,
  color: require("./color.js"),
  contrast_with: require("./contrast-with.js"),
  date_with_time_zone: require("./date-with-time-zone.js"),
  excludes: require("./excludes.js"),
  hostname: require("./hostname.js"),
  includes: require("./includes.js"),
  itinerary: require("./itinerary.js"),
  markdown: require("./markdown.js"),
  percentage_of: require("./percentage-of.js"),
  pluralise: require("./pluralise.js"),
  publication: require("./publication.js"),
  sum: require("./sum.js"),
  syndication_target: require("./syndication-target.js"),
  template_content_to_feed_html: require("./template-content-to-feed-html.js"),
};
