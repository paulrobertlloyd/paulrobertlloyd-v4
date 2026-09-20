import eleventyImg from "@11ty/eleventy-img";

const MEDIA_DIR = "src/media/";

/**
 * Get a media file’s path relative to the media directory
 *
 * An absolute image source resolves against the input directory, a relative
 * one against the template, so the same file arrives under two prefixes.
 * @param {string} filePath - File path, as resolved by Eleventy Image
 * @returns {string} Relative path
 */
export const mediaPath = (filePath) => {
  const index = filePath.indexOf(MEDIA_DIR);

  if (index === -1) {
    throw new Error(`Image resolved outside ${MEDIA_DIR}: ${filePath}`);
  }

  return filePath.slice(index + MEDIA_DIR.length);
};

/**
 * Get Eleventy image metadata for a route map image
 * @param {string} source - Image source
 * @param {string} outputDirectory - Directory to output image
 * @param {string} fileSlug - Generated image name
 * @param {boolean} [isStatsOnly] - Only generate metadata
 * @returns {object} Eleventy image metadata
 */
export const getImage = async (
  source,
  outputDirectory,
  fileSlug = "image",
  isStatsOnly = false,
) => {
  try {
    const metadata = await eleventyImg(source, {
      formats: ["png"],
      widths: ["auto"],
      urlPath: `/media/${outputDirectory}`,
      outputDir: `./${MEDIA_DIR}${outputDirectory}`,
      filenameFormat: (_id, _source, _width, format) => `${fileSlug}.${format}`,
      cacheOptions: {
        duration: "30d",
      },
      sharpPngOptions: {
        colours: 128,
        compressionLevel: 9,
      },
      statsOnly: isStatsOnly,
      ...(isStatsOnly && {
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
