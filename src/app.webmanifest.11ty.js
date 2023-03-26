module.exports = class WebManifest {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: 'app.webmanifest',
    };
  }

  render({app}) {
    const webmanifest = {
      lang: app.lang,
      name: app.name,
      short_name: app.short_name,
      icons: [{
        src: app.icon,
        sizes: '512x512',
        type: 'image/png',
      }],
      theme_color: app.theme_color,
      background_color: app.background_color,
      display: 'minimal-ui',
      start_url: './',
      share_target: {
        action: `${app.endpoint.micropub}/share/`,
        method: 'GET',
        enctype: 'application/x-www-form-urlencoded',
        params: {
          title: 'name',
          text: 'content',
          url: 'url',
        },
      },
    };

    return JSON.stringify(webmanifest, null, 2);
  }
};