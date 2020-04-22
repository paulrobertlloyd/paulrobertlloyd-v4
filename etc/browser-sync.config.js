module.exports = {
  https: {
    key: './ssl/localhost.key',
    cert: './ssl/localhost.crt'
  },
  ignore: [
    './www/images'
  ],
  rewriteRules: [{
    match: /\?page=(\d+)/g,
    replace: 'page/$1.html'
  }],
  ui: false
};
