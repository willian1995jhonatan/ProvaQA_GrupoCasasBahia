const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
    reportFilename: 'mochawesome',  // adiciona esta linha para nome fixo
  },
e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      config.baseUrl = config.env.baseUrl;
      return config;
    },
  },
});
