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
  }],
  serveStatic: ['www'],
  serveStaticOptions: {
    extensions: ['html']
  }
};
