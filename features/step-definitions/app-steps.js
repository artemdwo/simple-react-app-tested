module.exports = function () {
  this.When(/^I'm on the main page$/, function () {
    return helpers.loadPage('http://localhost:3002')
  })

  this.Then(/^The root element class should be App$/, function () {
    return driver.wait(until.elementsLocated(by.id('root')), 10000)
    .then( function () {
      return driver.findElement(by.css('#root>div')).getAttribute('class')
    })
    .then( function (cls) {
      expect(cls).to.equal('App')
    })
  })

  this.Then(/^The main div should not have any Person children divs by default$/, function () {
    return driver.wait(until.elementsLocated(by.id('root')), 10000)
    .then( function () {
      return driver.findElement(by.css('#root>.App')).findElements(by.css('div.Person'))
    })
    .then( function(elements) {
      expect(elements.length).to.equal(0)
    })
  })

  this.Then(/^"Toggle Person list" button is present$/, function () {
    return driver.findElement(by.css('div.App #personToggler')).getText()
    .then( function(text) {
      expect(text).to.equal('Toggle Persons list')
    })
  })

  this.Then(/^The main div has 3 div children styled with Person class$/, function () {
    return driver.findElement(by.css('div.App #personToggler')).click()
    .then( function () {
      return driver.findElement(by.css('#root>.App')).findElements(by.css('div.Person'))
    })
    .then( function(elements) {
      expect(elements.length).to.equal(3)
    })
  })

  this.Then(/^Click on on the middle text of the second card removes the second card$/, function () {
    driver.findElement(by.id('personToggler')).click()
    
    return driver.findElements(by.css('.App>div>.Person'))
    .then(elements => {
      let id = elements[1].getAttribute('id')
      elements[1].findElements(by.css('p')).then(ps => ps[1].click())
      driver.findElement(by.css('#root>.App')).findElements(by.css('div.Person')).then( persons => expect(persons.length).to.equal(2))
      return id
    }).then( id => {
      driver.findElements(by.id(''+id)).then( el => expect(el).to.be.empty)
    })
    
  })
}