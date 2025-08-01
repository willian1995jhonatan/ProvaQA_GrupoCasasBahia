const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  video: true,
  pageLoadTimeout: 120000, // espera até 2 minutos para o carregamento da página
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
  },
});
