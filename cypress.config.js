const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = {
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler({}));
    },
    baseUrl: 'https://www.ibm.com',
  },
}
