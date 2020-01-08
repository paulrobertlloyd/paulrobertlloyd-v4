/* eslint-disable camelcase */
module.exports = {
  title: 'Paul Robert Lloyd',
  short_title: 'PRL',
  description: 'The personal website of Paul Robert Lloyd',
  url: process.env.URL,
  theme_color: '#212227',
  accent_color: '#20e',
  background_color: '#fff',
  favicon: '/images/app.ico',
  icon: '/images/app.png',
  endpoint: {
    auth: 'https://indieauth.com/auth',
    token: 'https://tokens.indieauth.com/token',
    micropub: 'https://indiekit.paulrobertlloyd.com/micropub',
    microsub: 'https://aperture.p3k.io/microsub/32',
    webmention: 'https://webmention.io/paulrobertlloyd.com/webmention'
  },
  author: {
    name: 'Paul Robert Lloyd',
    url: 'https://paulrobertlloyd.com',
    email: 'noreply@paulrobertlloyd.com',
    avatar: 'https://gravatar.com/avatar/15091a37bacfa4bdd011282627eaca2b?s=512'
  },
  token: {
    mapbox: 'pk.eyJ1IjoicGF1bHJvYmVydGxsb3lkIiwiYSI6Ik54cHBhS0UifQ.bNN4HG8gg9JMj_Dr_hkdLg',
    ombdapi: 'e2e2ef5c'
  },
  environment: process.env.NODE_ENV
};
