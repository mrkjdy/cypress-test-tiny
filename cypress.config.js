const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = {
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler({}));
    },
  },
}
