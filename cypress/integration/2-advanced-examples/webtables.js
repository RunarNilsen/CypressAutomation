/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
 
describe('Test cases for WebTables', function() 
{
 
it("Let's locate webTables",function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
// this gets all rows of second column, except HEADER ROW and loop them
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
    const text=$e1.text()
    if(text.includes("Python"))
    {
        // It is jumping another column and get the value and give it as an argumant to the function
        // JQuery next() command jumps directly following siblings.
        // We can use next() method with only get() method
        // we grab exactly same element of $e1 by using eq(index)
        // We use JQuery method of next(), therefore we have to use promise of then() to use the result
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})

//-------------------------------------------------------------------------------------------------------------
// ----------------------------------Handling Mouse hover popus using Cypress ---------------------------------
// invoking JQuery show() method like that
// By typing this "cy.get("div.mouse-hover-content")", we use directly parent of Top hidden element. We have to use parent directly
cy.get("div.mouse-hover-content").invoke('show')
cy.contains('Top').click()
cy.url().should('be.equal', 'https://rahulshettyacademy.com/AutomationPractice/#top')

// cy.contains('Top').click({force:true}) // run just this if you just want to click but not verifying




//---------------------------------------------------------------------------------
// ----------Handling Child windows using Cypress -----------------------------
cy.get('#opentab').then(function(e1){
    // we have to write promise to establish connection between cypress and JQuery methods
    const tabUrl = e1.prop('href') // getting the value of href
    cy.visit(tabUrl)

})





//---------------------------------------------------------------------------------
// ---------- Handling Frames with Cypress using real time example-----------------







 
 
})

 
 
})