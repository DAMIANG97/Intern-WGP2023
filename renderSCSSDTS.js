const sass = require('sass');
const path = require('path');

/**
 * This is custom renderer for SCSS declaration files.
 * `typescript-plugin-css-modules` does not support SCSS
 * so we need to compile it to CSS before passing it to the plugin.
 */
const renderSCSSDTS = (css, { fileName, logger }) => {
  try {
    const rendered = sass.compileString(css, {
      importers: [
        {
          findFileUrl: (url) => {
            const u = new URL('file://');
            const urlRoot = url.startsWith('/') ? url.slice(1) : url;
            const urlWithCorrectExt = urlRoot.endsWith('.scss') ? urlRoot : `${urlRoot}.scss`;
            const pathname = path.resolve(__dirname, urlWithCorrectExt);
            u.pathname = pathname;
            return u;
          },
        },
      ],
      loadPaths: ['./src/', './node_modules'],
      logger,
    });

    return rendered.css;
  } catch (error) {
    logger.error(error.message);
  }
};

module.exports = renderSCSSDTS;
