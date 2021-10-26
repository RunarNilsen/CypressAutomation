
/// <reference types="Cypress"/>
describe('My First Test', () => {
    it('Does not do much!', () => {
      // first test case here
     expect(true).to.equal(true)
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca') // it is reacing the web element and typeing 'ca'
      cy.wait(2000)
      // verify that there are 4 element appear when we search 'ca'
      cy.get('.product:visible').should('have.length',4) // it will take just visible elements. It comes from jquery
      // Select the carrot product and add it to the basket
      

    })
 
  })
  