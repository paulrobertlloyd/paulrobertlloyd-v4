const _ = require('lodash');

/**
 * Get embed HTML
 *
 * @param {object} attributes Embed attributes
 * @param {object} options Embed options
 * @returns {string} HTML for embed
 */
module.exports = async function(attributes, options) {
  let provider = attributes.provider_name.toLowerCase();
  let [, src] = attributes.html.match(/src="(.+?)"/);
  src = new URL(src)

  if (provider === 'youtube') {
    src.searchParams.set('autoplay', 1)
    src.hostname = src.hostname.replace('youtube', 'youtube-nocookie');
  }

  const ratio = attributes.height / attributes.width
  const height = Math.round(options.width * ratio)
  const loading = options.lazy ? 'lazy' : 'eager'

  const embedHtml = `<div class="${options.embedClass} ${options.embedClass}--${provider}" style="--aspect-ratio: ${ratio}"><iframe
    src="${src}"
    allow="${options.allow}"
    title="${attributes.title}"
    loading="${loading}",
    height="${height}"
    width="${options.width}"
  ></iframe></div>`

  if (attributes.caption) {
    const captionHtml = `<figcaption>${_.unescape(attributes.caption)}</figcaption>`

    if (attributes.container_class) {
      return `<figure class="${attributes.container_class}">${embedHtml}${captionHtml}</figure>`
    } else {
      return `<figure>${embedHtml}${captionHtml}</figure>`
    }
  } else {
    if (attributes.container_class) {
      return `<div class="${attributes.container_class}">${embedHtml}</div>`
    }

    return embedHtml
  }
}
