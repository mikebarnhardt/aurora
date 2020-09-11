/**
 *  PostCSS will do nothing in development mode. This config is purely to load
 *  cssnano in production to strip comments and whitespace.
 */

let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'));
}

module.exports = {
  plugins
};
