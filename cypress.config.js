const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "http://marvel-qa-cademy.herokuapp.com",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
