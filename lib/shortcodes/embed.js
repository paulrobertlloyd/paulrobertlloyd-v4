module.exports = (href, imgSrc, aspectRatio = '16/9') => {
  let embedSrc = href;

  if (href.includes('vimeo')) {
    embedSrc = href.replace('vimeo.com', 'player.vimeo.com/video') + '?color=fff&title=0&byline=0&badge=0&portrait=0&autoplay=1';
    imgSrc += '?mw=1920&q=80';
  } else if (href.includes('youtube')) {
    embedSrc = href.replace('www.youtube.com/watch?v=', 'www.youtube-nocookie.com/embed/') + '?modestbranding=1&autoplay=1';
    imgSrc = href.replace('www.youtube.com/watch?v=', 'i.ytimg.com/vi/') + '/hqdefault.jpg';
  }

  const html = `<a href="${href}" data-embed-src="${embedSrc}" style="--aspect-ratio: ${aspectRatio}">
    <img src="${imgSrc}" alt="">
  </a>`;

  return html.replace(/(\r\n|\n|\r)(\s\s)*/gm, '');
};
