module.exports = {
    before : function(browser) {
        console.log('Setting up...');
        browser.url(browser.launchUrl);
    },
    
    after : function(browser) {
        console.log('Closing down...');
        browser.end();
    },

    'The app has main <div> styled as App class' : function (browser) {
        browser.assert.cssClassPresent('#root>div', "App")
    },

    'The main <div> should not have any <Person> children div\'s by default' : function (browser) {
        browser.elements('css selector','#root>.App>div.Person', function(result) {
            var elementCount = 0
            result.value.forEach(function () {
                elementCount = elementCount + 1
            })
            browser.assert.equal(elementCount, 0);
        });
    },

    '"Toggle Person list" button is present' : function (browser) {
        browser
        .assert.visible('#personToggler')
        .assert.containsText('#personToggler', 'Toggle Persons list');
    },

    'The main <div> has 3 <div> children styled with Person class' : function (browser) {
        browser
        .click('#personToggler')
        .assert.cssClassPresent('.App>div div', 'Person')
        .elements('css selector','.Person', function(result) {
            var elementCount = 0
            result.value.forEach(function () {
                elementCount = elementCount + 1
            })
            browser.assert.equal(elementCount, 3);
        });

    },

    'Click on the middle text of the second card removes the second card' : function (browser) {
        browser.elements('css selector','.Person', function(result) {
            var element = result.value[1]; 
            browser.elementIdAttribute(element.ELEMENT, "id", function(idResult) {
                var elementId = idResult.value;
                browser.elementIdElements(element.ELEMENT, "css selector", "p", function(pResult) {
                    var elementP = pResult.value[1].ELEMENT;
                    browser.elementIdClick(elementP);
                    var removedElementCss = "#" + elementId;
                    browser.assert.elementNotPresent(removedElementCss);
                })
            })
        })        
    }
};