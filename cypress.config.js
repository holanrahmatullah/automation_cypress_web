const { defineConfig } = require('cypress');
const dotenv = require('dotenv'); // Import dotenv
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
dotenv.config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results/mochawesome',  
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, _config) {
      // Implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL, 
    BASE_URL_THE_INTERNET_HEROKU: process.env.BASE_URL_THE_INTERNET_HEROKU,
    USERNAME_USER: process.env.USERNAME_USER, 
    PASSWORD_USER: process.env.PASSWORD_USER, 
    
  },
  chromeWebSecurity: false
});
