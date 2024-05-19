const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 670,
    defaultCommandTimeout: 4500,
    screenshotOnRunFailure: false
  },
});
