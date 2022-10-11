const { defineConfig } = require('cypress');
const { config } = require('cypress');
const { includes } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  projectId: 'a95rpy',
  pageLoadTimeout: 5000,
  defaultCommandTimeout: 4000,
  reporter: "mochawesome",
  //baseUrl: 'https://rahulshettyacademy.com/angularpractice/',


  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
   
    },
    excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/2-advanced-examples'],
    specPattern: 'cypress/integration/examples/*.js',
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
    
    
  },

  retries: {
    "runMode": 1
  }
  
});