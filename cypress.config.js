import { defineConfig } from 'cypress'
import cypressEslint from '@cypress/browserify-preprocessor'

export default defineConfig({
    viewportHeight: 800,
    viewportWidth: 1200,

    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cypressEslint())
        },

        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'cypress/results/mochawesome-report',
            overwrite: false,
            html: false,
            json: true,
        },

        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    },
})
