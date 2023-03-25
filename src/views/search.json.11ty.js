const tokenize = require('../../lib/utils/tokenize.js');

module.exports = class Search {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: 'archives/search.json',
    };
  }

  render({collections}) {
    const search = collections.public.map(item => ({
      title: item.data.page_title,
      layout: item.data.layout,
      content: tokenize(item.content),
      url: item.url,
    }));

    return JSON.stringify(search, null, 2);
  }
};
