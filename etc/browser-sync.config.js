module.exports = {
  files: 'www',
  https: {
    key: './ssl/localhost.key',
    cert: './ssl/localhost.crt'
  },
  ignore: [
    './www/images'
  ],
  rewriteRules: [{
    match: /\?page=(\d+)/g,
    replace: 'page/$1'
  }, {
    match: /https:\/\/res\.cloudinary\.com\/paulrobertlloyd\/image\/fetch\/(?:[\w\s,.])*\/https:\/\/paulrobertlloyd\.com/g,
    replace: ''
  }],
  serveStatic: ['www'],
  serveStaticOptions: {
    extensions: ['html']
  }
};
