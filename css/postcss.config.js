let plugins = [
  // require('postcss-advanced-variables'),
  require('postcss-import'),
  require('postcss-each'),
  require('autoprefixer')
];

if ( process.env.NODE_ENV === 'production' ) {
  plugins.push(
    require('postcss-csso')
  );
}

module.exports = {
  plugins
};
