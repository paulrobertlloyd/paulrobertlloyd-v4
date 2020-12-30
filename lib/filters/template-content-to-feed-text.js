const {htmlToText} = require('html-to-text');

/**
 * Get content of a post as plain text (suitable for syndication)
 * If includes any links, the final one is appended to the end
 *
 * @param {string} item Post data
 * @returns {string} Plain text
 */
module.exports = item => {
  const html = item.templateContent;

  // Get all the link references
  let hrefs = [...html.matchAll(/href="(https?:\/\/.+?)"/g)];

  // Remove any links to Twitter
  // HTML may contain Twitter usernames or hashtag links
  hrefs = hrefs.filter(href => !href[1].includes('twitter.com'));

  // Get the last link mentioned, or return false
  const lastHref = hrefs.length > 0 ? hrefs[(hrefs.length - 1)][1] : false;

  // Convert HTML to plain text, removing any links
  const text = htmlToText(item.templateContent, {
    tags: {
      a: {
        options: {
          ignoreHref: true
        }
      },
      img: {
        format: 'skip'
      }
    },
    wordwrap: false
  });

  // Append the last link if present
  const content = lastHref ? `${text} ${lastHref}` : text;

  return content;
};
