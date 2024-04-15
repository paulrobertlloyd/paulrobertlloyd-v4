import eleventyImg from "@11ty/eleventy-img";
import { getMapUrl } from "../utils/map-url.js";

/**
 * Get HTML `img` element for a route map image
 * @param {object} geojson - GeoJSON
 * @param {string} outputDirectory - Directory to output image
 * @param {string} [alt] - Alternative text for map
 * @returns {string} HTML `picture` element
 */
export const route_map = async (geojson, outputDirectory, alt = "") => {
  const height = geojson._height;
  const width = geojson._width || 1200;
  const mapUrl = getMapUrl(geojson, height, width);

  const metadata = await eleventyImg(mapUrl, {
    formats: ["png"],
    widths: ["auto"],
    urlPath: `/media/${outputDirectory}`,
    outputDir: `./src/content/media/${outputDirectory}`,
    filenameFormat: (_id, _source, _width, format) => `route_map.${format}`,
    cacheOptions: {
      duration: "30d",
    },
    sharpPngOptions: {
      colours: 128,
      compressionLevel: 9,
    },
  });

  return eleventyImg.generateHTML(metadata, {
    alt,
    loading: "lazy",
    decoding: "async",
  });
};
