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
  icons: [{
    src: '/assets/icons/32.svg',
    sizes: '32x32',
    type: 'image/svg+xml',
  }, {
    src: '/assets/icons/512.png',
    sizes: '512x512',
    type: 'image/png',
  }],
};
