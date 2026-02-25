const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    // 👇 This makes Cypress pick up all .feature files
    specPattern: "cypress/e2e/**/*.feature",

    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      // 👇 Important: tell cucumber where step definitions live
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/e2e/StepDefinitions/**/*.js",
      });

      return config;
    },
  },
});
