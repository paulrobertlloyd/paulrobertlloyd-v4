import path from "node:path";
import eleventyImg from "@11ty/eleventy-img";

const presets = {
  default: {
    widths: [960, 1440],
  },
  card: {
    sizes: "20vw",
    widths: [480, 960],
  },
  "card-square": {
    sizes: "20vw",
    widths: [480, 960], // Values used for heights, too.
  },
  supporting: {
    sizes: "(max-width: 440px) 100vw, 40vw",
    widths: [640, 960],
  },
};

/**
 * Get HTML `img` or `picture` element for set of image sources
 * @param {object} image - Image data
 * @param {string} [preset] - Sub-directory to save images
 * @param {string} [classes] - Classes
 * @returns {string} HTML `picture` element
 */
export const image = async (image, preset = "default", classes) => {
  if (!image) {
    return;
  }

  const metadata = await eleventyImg(path.join("./src/content", image.url), {
    statsOnly: true,
    formats: ["auto"],
    widths: presets[preset].widths,
    urlFormat: ({ src, width }) =>
      `/${src.replace("src/content/", "")}?tr=w-${width}` +
      (preset === "card-square" ? `,h-${width}` : ""),
  });

  return eleventyImg.generateHTML(metadata, {
    alt: image.alt || "",
    ...(classes && { class: classes }),
    decoding: "async",
    loading: "lazy",
    sizes: presets[preset].sizes || "100vw",
  });
};
