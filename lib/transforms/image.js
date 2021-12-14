const imagesResponsiver = require('images-responsiver');
const {convertHtmlToAbsoluteUrls} = require('@11ty/eleventy-plugin-rss');
const srcsets = require('../utils/get-srcsets.js');

module.exports = async (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.html')) {
    let url = outputPath.replace(/^(?:w{3})(.*)+(?:index\.html)/, '$1');
    url = new URL(url, process.env.URL).href
    content = await convertHtmlToAbsoluteUrls(content, url)
    return imagesResponsiver(content, srcsets);
  }

  return content;
};
