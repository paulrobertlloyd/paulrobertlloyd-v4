const sanitizeHTML = require('sanitize-html');

module.exports = (webmentions, url) => {
  const allowedTypes = ['in-reply-to'];
  const allowedHTML = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      a: ['href']
    }
  };

  const clean = entry => {
    const {content} = entry;

    if (content && content['content-type'] === 'text/html') {
      content.value = sanitizeHTML(content.value, allowedHTML);
    }

    return entry;
  };

  return webmentions
    .filter(entry => {
      const target = entry['wm-target'].replace(/\/$/, '');
      url = url.replace(/\/$/, '');
      return target === url;
    })
    .filter(entry => allowedTypes.includes(entry['wm-property']))
    .filter(entry => Boolean(entry.content))
    .map(clean);
};
