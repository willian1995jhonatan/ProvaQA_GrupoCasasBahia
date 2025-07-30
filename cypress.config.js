const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000', // ajuste se necessário
    setupNodeEvents(on, config) {
      // event listeners opcionais
    },
  },
});
