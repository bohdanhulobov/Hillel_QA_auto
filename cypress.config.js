import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1200,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results/mochawesome-report",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "https://qauto.forstudy.space",
  },
});