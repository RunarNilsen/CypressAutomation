/// <reference types="Cypress"/>
describe("My second Test", () => {
  it("Does not do much!", () => {
    // first test case here
    expect(true).to.equal(true);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca"); // it is reacing the web element and typeing 'ca'
    cy.wait(2000);

    // Adding product dynamically
    // check commands section in the cypress document
    // Iterating the element list to point desired element. use each method
    cy.get(".products").as('productLocator')
    cy.get('@productLocator')
      .find(".product")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const textVeg = $el.find("h4.product-name").text(); // reaching the productname of the element and get the text
        if (textVeg.includes("Cashews")) {
          $el.find("button").trigger('click') // pointing add button and click on that button
        }
      }); 

      // go to basket 
      cy.get('.cart-icon > img').trigger('click')
      // click the "PROCEED TO CHECKOUT"
      cy.contains('PROCEED TO CHECKOUT').trigger('click')
      // click the "Place Order"
      cy.get(':nth-child(14)').trigger('click')

      cy.visit('https://rahulshettyacademy.com/#/index')



  });





});
