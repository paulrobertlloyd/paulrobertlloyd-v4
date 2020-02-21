const slugify = require('@sindresorhus/slugify');

module.exports = function () {
  const sources = [{
    title: '24 ways',
    summary: 'The advent calendar for web geeks. I’m a frequent contributor and [redesigned the site in 2013](/2013/12/redesigning_24_ways).',
    url: 'https://24ways.org'
  }, {
    title: 'a.green:focus',
    summary: 'A grassroots coalition of web developers working together to reduce our industry’s impact on the environment.',
    url: 'https://agreenfocus.tumblr.com'
  }, {
    title: 'A List Apart',
    summary: 'Exploring the design, development and meaning of web content, with a special on web standards and best practice.',
    url: 'https://alistapart.com'
  }, {
    title: 'Academic Essays',
    summary: 'A selection of essays and research written while at college and university.'
  }, {
    title: 'Clearleft',
    summary: 'Select articles written for Clearleft, were I worked between 2009 and 2013.',
    url: 'https://clearleft.com/posts'
  }, {
    title: 'Creative Bloq',
    summary: 'A daily mix of advice and inspiration for digital and traditional artists, web designers, graphic designers, 3D and VFX artists, illustrators, and more.',
    url: 'https://www.creativebloq.com'
  }, {
    title: 'CSS-Tricks',
    summary: 'A site about all things web design and development.',
    url: 'https://css-tricks.com'
  }, {
    title: 'Design is...',
    summary: 'Inspiring quotes from great designers.',
    url: 'https://design--is.tumblr.com'
  }, {
    title: 'Digital Arts',
    summary: 'A magazine for creative professionals in the UK.',
    url: 'https://www.digitalartsonline.co.uk'
  }, {
    title: 'Net magazine',
    summary: 'The premiere print publication for web designers.',
    url: 'https://www.creativebloq.com/net-magazine'
  }, {
    title: 'New Adventures Magazine',
    summary: 'The accompanying print publication for attendees of the New Adventures conference.',
    url: 'https://newadventuresconf.com/articles'
  }, {
    title: 'Offscreen Magazine',
    summary: 'A thoughtful, human-centred take on technology and the web.',
    url: 'https://www.offscreenmag.com'
  }, {
    title: 'Small Batch List',
    summary: 'Handpicked goodness for your inbox, curated by [Claire Robertson](http://loobylu.com).',
    url: 'http://smallbatchlist.com'
  }, {
    title: 'Smashing Magazine',
    summary: 'Reliable, useful and practical articles for web designers and developers.',
    url: 'https://smashingmagazine.com'
  }, {
    title: 'The Pastry Box Project',
    summary: 'New posts every day from bright minds shaping the web.',
    url: 'https://the-pastry-box-project.net'
  }, {
    title: 'Workspiration',
    summary: 'A website about how professional work, their tools and strategies.',
    url: 'https://workspiration.org'
  }];

  return sources.map(source => {
    const fileSlug = slugify(source.title, {
      separator: '_'
    });

    return {
      date: new Date(),
      fileSlug,
      url: `/articles/sources/${fileSlug}`,
      data: {
        layout: 'source',
        title: source.title,
        summary: source.summary,
        url: source.url
      }
    };
  });
};
