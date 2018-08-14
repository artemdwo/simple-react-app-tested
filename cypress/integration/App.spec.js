describe('Simple app test suite', function() {
    beforeEach(function () {
        cy.visit('/')
    })

    it('The app has main <div> styled as App class', function() {
        cy.get('#root>div').should('have.class', 'App')
      })

    it('The main <div> should not have any <Person> children div\'s by default', function() {
        cy.get('#root>.App').children('div.Person').should('have.length', 0)
    })

    it('"Toggle Person list" button is present', function() {
        cy.get('div.App #personToggler').should('have.text', 'Toggle Persons list')
    })

    it('The main <div> has 3 <div> children styled with Person class', function() {
        cy.get('#personToggler').click()
        cy.get('#root>.App>div').children('div').should('have.length', 3).and('have.class', 'Person')
    })

    it('Click on on the middle text of the second card removes the second card', function() {

        cy.get('#personToggler').click()
        cy.get('.App>div>.Person').then(($person) => {
            let person1 = $person[1].id
            cy.wrap($person[1]).find('p').then(($p) => {
                cy.wrap($p[1]).click()
            })
            cy.get('.App>div').children('.Person').should('have.length', 2)
            cy.get('#'+person1).should('not.to.exist')
        })
    })
  })
