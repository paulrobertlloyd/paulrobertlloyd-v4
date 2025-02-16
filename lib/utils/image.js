import eleventyImg from "@11ty/eleventy-img";

/**
 * Get Eleventy image metadata for a route map image
 * @param {string} source - Image source
 * @param {string} outputDirectory - Directory to output image
 * @param {string} fileSlug - Generated image name
 * @param {boolean} [statsOnly] - Only generate metadata
 * @returns {object} Eleventy image metadata
 */
export const getImage = async (
  source,
  outputDirectory,
  fileSlug = "image",
  statsOnly = false,
) => {
  try {
    const metadata = await eleventyImg(source, {
      formats: ["png"],
      widths: ["auto"],
      urlPath: `/media/${outputDirectory}`,
      outputDir: `./src/content/media/${outputDirectory}`,
      filenameFormat: (_id, _source, _width, format) => `${fileSlug}.${format}`,
      cacheOptions: {
        duration: "30d",
      },
      sharpPngOptions: {
        colours: 128,
        compressionLevel: 9,
      },
      statsOnly,
      ...(statsOnly && {
        remoteImageMetadata: {
          width: 100,
          height: 100,
          format: "png",
        },
      }),
    });

    return metadata.png[0];
  } catch {
    console.warn("Could not generate metadata for route map image");
  }
};

/**
 * Get actual path to media file
 * Eleventy Image transform plugin assumes image paths beginning with `/media` * are saved under `{dir.input}/media`, but images are actually saved under
 * `{dir.input}/content/media`.
 * @param {string} filePath - File path
 * @returns {string} - Resolved path
 */
export const getResolvedMediaPath = (filePath) => {
  return filePath?.replaceAll("/media/", "/content/media/");
};
