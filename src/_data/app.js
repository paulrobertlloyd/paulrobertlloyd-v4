const process = require('node:process');

module.exports = {
  lang: 'en-GB',
  name: 'Paul Robert Lloyd',
  short_name: 'PRL',
  description: 'The personal website of Paul Robert Lloyd',
  url: process.env.URL || '',
  theme_color: '#f4f4f5',
  theme_color_dark: '#26272b',
  accent_color: '#20e',
  background_color: '#fff',
  favicon: '/favicon.svg',
  icon: '/icon.png',
  endpoint: {
    auth: 'https://kit.paulrobertlloyd.com/auth',
    token: 'https://kit.paulrobertlloyd.com/auth/token',
    indieauth: 'https://kit.paulrobertlloyd.com/auth/metadata',
    micropub: 'https://kit.paulrobertlloyd.com/micropub',
    microsub: 'https://aperture.p3k.io/microsub/32',
    webmention: 'https://webmention.io/paulrobertlloyd.com/webmention',
  },
  author: {
    name: 'Paul Robert Lloyd',
    url: 'https://paulrobertlloyd.com',
    email: 'reply@paulrobertlloyd.com',
    avatar: 'https://gravatar.com/avatar/15091a37bacfa4bdd011282627eaca2b?s=512',
  },
  token: {
    mapbox: 'pk.eyJ1IjoicGF1bHJvYmVydGxsb3lkIiwiYSI6Ik54cHBhS0UifQ.bNN4HG8gg9JMj_Dr_hkdLg',
  },
  environment: process.env.NODE_ENV,
};