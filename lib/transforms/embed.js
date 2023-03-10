const getEmbedHtml = require('../utils/get-embed-html.js');
const getOEmbed = require('../utils/get-oembed.js');

const YOUTUBE_LINK = /<p(?:\sclass="(?<container_class>[-\w]*?)")?><a href="(?<url>(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)??[\w-]{11})"(?:\stitle="(?<caption>.*?)")?>.*?<\/a><\/p>/g;
const VIMEO_LINK = /<p(?:\sclass="(?<container_class>[-\w]*?)")?><a href="(?<url>(?:https?:\/\/)??(?:w{3}\.)??vimeo\.com\/(\d+)(\S*))"(?:\stitle="(?<caption>.*?)")?>.*?<\/a><\/p>/g;

module.exports = async (content, outputPath) => {
  const options = {
    allow: 'accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture',
    cacheDuration: '1d',
    embedClass: 'embed',
    lazy: true,
    width: 680,
  };

  if (outputPath && outputPath.endsWith('.html')) {
    // Find HTML that match given regular expressions
    const links = [
      ...(content.matchAll(YOUTUBE_LINK) || []),
      ...(content.matchAll(VIMEO_LINK) || []),
    ];

    // Return untransformed content if no links found
    if (links.length === 0) {
      return content;
    }

    // For each match, replace with embed HTML
    for (const link of links) {
      const linkHtml = link[0];
      const oEmbed = await getOEmbed(link.groups.url, options);

      if (!oEmbed) {
        return content;
      }

      const embedAttributes = {...link.groups, ...oEmbed};
      const embedHtml = await getEmbedHtml(embedAttributes, options);
      content = content.replace(linkHtml, embedHtml);
    }

    return content;
  }

  return content;
};
