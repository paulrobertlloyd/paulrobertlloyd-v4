import imagesResponsiver from "images-responsiver";

const options = {
  default: {
    attributes: {
      loading: "lazy",
      decoding: "async",
    },
    minWidth: 960,
    maxWidth: 1440,
    steps: 2,
    resizedImageUrl: (source, width) => `${source}?tr=w${width}`,
  },
  card: {
    minWidth: 240,
    maxWidth: 960,
    steps: 3,
    sizes: "20vw",
  },
  slide: {
    minWidth: 640,
    maxWidth: 960,
    steps: 2,
    sizes: "(max-width: 440px) 100vw, 40vw",
  },
};

/**
 * Add responsive image attributes to images
 * @param {string} content - HTML content
 * @returns {string} Transformed HTML
 */
export function image(content) {
  if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
    return imagesResponsiver(content, options, this.page.url);
  }

  return content;
}
