# Training application on React

Simple React application (SPA) created along the training course.

The course itself does not cover testing at this stage. Nevertheless, I've taken an opportunity to follow TDD approach regarding components development along the course.

[ ![Codeship Status for artemdwo/simple-react-app-tested](https://app.codeship.com/projects/b4a7a5a0-8dd2-0136-303c-32a6f37ce274/status?branch=master)](https://app.codeship.com/projects/303743)

# The main point here is testing
## Testing tools

### Enzyme
For components testing prior the actual development. TDD approach practice along with JS learning.

### Cypress
For UI testing only. No Selenium Webdriver needed.

### Cucumber
Old good Cucumber for JavaScript.

### TestCafe
For UI testing only. No Selenium Webdriver needed.

---
## How to use
### To get the app locally
```bash
# clone the repo
$ git clone https://github.com/artemdwo/simple-react-app-tested.git

# change directory to the project/directory
$ cd ~/to/the/project

# install all required dependencies
$ npm install
```

### To run the app
```
$ npm start
```

### To run component\unit tests
```
$ npm run test:co
```
---
### To run UI tests with Cypress
> To run the UI tests, you are going to need the App running. 

**Run the app in one terminal**
```
$ npm start
```

**Update BaseUrl in Cypress configuration file**

Since `npm start` may result server running on different _ports_ or your setup may not have _localhost_ due to any reason, you will have to change BaseUrl to whatever server accessible on:
```bash
Compiled successfully!

You can now view simple-react-app-tested in the browser.

  Local:            http://localhost:3002/
  On Your Network:  http://{ip.add.re.ss}:3002/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

---
`./cypress.json`
```json
{
  "baseUrl": "http://localhost:3002"
}
```

**Run the tests in a different terminal**

---
*Headless*
```
$ npm run test:cy
```
---
*In Chrome*
```
$ npm run test:cy:chrome
```
---
*Cypress UI*
```
$ npx cypress open
```
Click on `App.spec.js` in the list and you will see it running with all the details.

---
### To run UI tests with Cucumber
Ensure you have the App running.

Otherwise, start the server before you proceed: 
```
$ npm start
``` 

You'd need to update __baseUrl__ with the port, if different from specified __port__ directly in __step definition__ file `../simple-react-app-tested/features/step-definitions/app-steps.js` LOC:3 where
```javascript
return helpers.loadPage('http://localhost:{port}')
```
---
*Cucumber JS with Chrome*
```
$ npm run test:cu
```
---
*Cucumber JS with Firefox*
```
$ npm run test:cu:firefox
```
---
### To run UI tests with TestCafe
Ensure you have the App running.

Otherwise, start the server before you proceed: 
```
$ npm start
``` 

You'd need to update __baseUrl__ with the port, if different from specified __port__ directly in `test` file `../simple-react-app-tested/testcafe/tc_first.test.js` LOC:3 where
```javascript
fixture `homePage` .page `http://localhost:{port}`
```
---
*TestCafe JS with Chrome*

With the browser window
```
$ npm run test:tc
```
In headless mode
```
$ npm run test:tc:headless
```
---
*TestCafe JS with Firefox*

With the browser window
```
$ npm run test:tc:firefox
```
In headless mode
```
$ npm run test:tc:firefox:headless
```
---
### Alternative baseUrl

You can also run the latest tests against Heroku hosted app on: https://simple-react-app-test.herokuapp.com

# Happy testing and coding!
