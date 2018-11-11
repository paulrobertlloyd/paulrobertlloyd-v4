module.exports = ({
  plugins: [
    require('postcss-easy-import'),
    require('postcss-svg')({
      dirs: ['src/assets/vectors'],
      svgo: {plugins: [{
        cleanupAttrs: true
      }]}
    }),
    require('postcss-logical')({
      dir: 'ltr'
    }),
    require('postcss-color-mod-function'),
    require('postcss-custom-media'),
    require('postcss-custom-selectors'),
    require('postcss-extend-rule'),
    require('postcss-media-minmax'),
    require('cssnano')({
      preset: ['default', {
        calc: {
          preserve: true // `false` removes required brackets
        }
      }]
    })
  ]
});
