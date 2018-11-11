module.exports = {
  files: 'www',
  https: {
    key: './etc/localhost.key',
    cert: './etc/localhost.crt'
  },
  ignore: [
    './www/images'
  ],
  rewriteRules: [{
    match: /\?page=(\d+)/g,
    replace: 'page/$1'
  }, {
    match: /https:\/\/paulrobertlloyd.imgix.net\//g,
    replace: '/images/'
  }],
  serveStatic: ['www'],
  serveStaticOptions: {
    extensions: ['html']
  }
};
