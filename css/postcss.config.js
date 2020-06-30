let plugins = [
  require('postcss-import'),
  require('postcss-custom-media'),
  require('postcss-css-variables')({preserve: true}),
  require('autoprefixer')
];

if ( process.env.NODE_ENV === 'production' ) {
  plugins.push(
    require('cssnano')({
      preset: [
        'default',
        {
          mergeLonghand: false
        }
      ]
    })
  );
}

module.exports = {
  plugins
};
