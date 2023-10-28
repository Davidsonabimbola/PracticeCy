
const { defineConfig } = require("cypress");

  module.exports = defineConfig({
    viewportHeight:1080,
    viewportWidth: 1920,
    e2e: {
    baseUrl: "https://doyenify.com/",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['*.hot-update.js']
    },
  });