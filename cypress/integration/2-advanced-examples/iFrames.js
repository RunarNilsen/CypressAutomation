/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
 
describe('Test cases for Iframes', function() 
{
 
it("Let's locate Iframes",function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded('#courses-iframe') // loading frame 
// iframe() method will see inside the loaded iframe
cy.iframe().find("a[href*='mentorship']").eq(0).click() // find and click 'Mentorship' section

// verify that bundle package in the Mentorship page has 2 packages
cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
  








 
 
})

 
 
})