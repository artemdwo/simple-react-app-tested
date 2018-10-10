const chromedriverPath = require('chromedriver').path;
const geckodriverPath = require('geckodriver').path;
const seleniumServerPath = require('selenium-server').path;

module.exports = {
  output_folder: './nightwatch/reports',
  src_folder: './nightwatch/tests',
  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
      'webdriver.gecko.driver': geckodriverPath
    },
  },
  test_settings: {
    default: {
      launch_url: "http://localhost:3000",
      globals: {
        url: 'http://localhost:3000',
      },
      desiredCapabilities: {
        "browserName": "chrome",
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        "marionette": true
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};