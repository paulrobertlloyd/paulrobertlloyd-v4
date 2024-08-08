import eleventyImg from "@11ty/eleventy-img";
import { getMapUrl } from "./map-url.js";

/**
 * Get Eleventy image metadata for a route map image
 * @param {object} geojson - GeoJSON
 * @param {string} outputDirectory - Directory to output image
 * @returns {object} Eleventy image metadata
 */
export const route_map = async (geojson, outputDirectory) => {
  const height = geojson._height;
  const width = geojson._width || 1200;
  const mapUrl = getMapUrl(geojson, height, width);

  try {
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

    return metadata.png[0];
  } catch {
    console.warn("Could not generate metadata for route map image");
  }
};
