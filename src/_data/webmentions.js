const process = require('node:process');
const eleventyFetch = require('@11ty/eleventy-fetch');

const ENDPOINT = 'https://webmention.io/api/mentions.jf2';
const TOKEN = process.env.WEBMENTION_IO_TOKEN;

module.exports = async function () {
  try {
    const endpoint = `${ENDPOINT}?token=${TOKEN}&per-page=999`;
    const webmentions = await eleventyFetch(endpoint, {
      duration: '1d',
      type: 'json',
    });

    return webmentions;
  } catch (error) {
    console.warn(error.message);
    return {
      children: [],
    };
  }
};
