const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 5000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/Runreports",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
  },
})
