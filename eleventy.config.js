import { readFile } from "node:fs/promises";
import process from "node:process";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventySyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import eleventyLightningCss from "@11tyrocks/eleventy-plugin-lightningcss";
import { markdownParser } from "./lib/libraries/markdown.js";
import * as collections from "./lib/collections/index.js";
import * as filters from "./lib/filters/index.js";
import * as shortcodes from "./lib/shortcodes/index.js";
import navigation from "./src/_data/navigation.js";

// Can’t use import attributes until supported by Acorn dependency
// See: https://github.com/11ty/eleventy/issues/3128
let appJson = await readFile(new URL(`src/app.json`, import.meta.url));
let app = JSON.parse(appJson.toString());

// Get current year
const currentYear = new Date().getFullYear();

/**
 * Get Eleventy configuration
 * @param {object} eleventy - Eleventy configuration
 * @returns {object} Updated Eleventy configuration
 */
// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function (eleventy) {
  // Collections
  for (const [name, collection] of Object.entries(collections)) {
    eleventy.addCollection(name, collection);
  }

  // Extensions
  eleventy.addTemplateFormats("markdown");
  eleventy.addExtension("markdown", { key: "md" });

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventy.addFilter(name, filter);
  }

  // Slugify filter
  const slugifyFilter = eleventy.getFilter("slugify");
  eleventy.addFilter("slugify", (string) =>
    slugifyFilter(string, {
      separator: "_",
    }),
  );

  // Global data
  eleventy.addGlobalData("app", app);
  eleventy.addGlobalData("app.url", process.env.URL || "");
  eleventy.addGlobalData("buildDate", Date.now());
  eleventy.addGlobalData("currentYear", currentYear);

  // Passthrough
  // On production, save media to images folder, which gets proxied via media
  const mediaDirectory =
    process.env.NODE_ENV === "production" ? "images" : "media";
  eleventy.addPassthroughCopy({ "./src/content/media": mediaDirectory });
  eleventy.addPassthroughCopy({ "./src/app.json": "app.webmanifest" });
  eleventy.addPassthroughCopy("./src/robots.txt");
  eleventy.addPassthroughCopy("./src/assets");

  // Plugins
  eleventy.addPlugin(EleventyRenderPlugin);
  eleventy.addPlugin(eleventySyntaxHighlight);
  eleventy.addPlugin(eleventyLightningCss);

  // Shortcodes
  for (const [name, shortcode] of Object.entries(shortcodes)) {
    eleventy.addShortcode(name, shortcode);
  }

  // Folder data
  eleventy.setDataFileBaseName("_data");

  // Libraries
  eleventy.setLibrary("md", markdownParser);

  // Liquid
  eleventy.setLiquidOptions({
    cache: true,
    globals: { app, currentYear, navigation },
  });

  // Config
  return {
    dir: {
      input: "src",
      output: "www",
      layouts: "_layouts",
    },
    templateFormats: ["css", "liquid", "md", "11ty.js"],
  };
}
