# Training application on React

Simple React application (SPA) created along the training course.

The course itself does not cover testing at this stage. Nevertheless, I've taken an opportunity to follow TDD apporach regarding components development along the course.

# The main point here is testing
## Testing tools

### Enzyme
For components testing prior the actual development

### Cypress
For UI testing only.

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
$ npm test
```

### To run UI tests
> To run the UI tests, you are going to need the App running. 

**Run the app in one terminal**
```
$ npm start
```
**Run the tests in the different terminal**

---
*Headless*
```
$ npx cypress run
```
---
*Cypress UI*
```
$ npx cypress open
```
Click on `App.spec.js` in the list and you will see it running with all the details.

# Happy testing and coding!
