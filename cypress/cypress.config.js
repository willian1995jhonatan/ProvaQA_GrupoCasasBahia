const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000', // ajuste para a URL da sua aplicação
    setupNodeEvents(on, config) {
      // aqui você pode adicionar event listeners, se necessário
    },
  },
});
