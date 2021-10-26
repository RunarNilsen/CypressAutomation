/// <reference types="Cypress"/>
describe("My First Test", () => {
  it("Does not do much!", () => {
    // first test case here
    expect(true).to.equal(true);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca"); // it is reacing the web element and typeing 'ca'
    cy.wait(2000);
    // verify that there are 4 element appear when we search 'ca'
    cy.get(".products .product").should("have.length", 4); // it will take just visible elements. It comes from jquery
    //cy.get('.product:visible').should('have.length',4)

    // parent-child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    // Select the carrot product and add it to the basket
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click(); // eq() method will point second product and contains point element with text 'ADD TO CART'

    // Adding product dynamically
    // check commands section in the cypress document
    // Iterating the element list to point desired element. use each method
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const textVeg = $el.find("h4.product-name").text(); // reaching the productname of the element and get the text
        if (textVeg.includes("Cashews")) {
          $el.find("button").click(); // pointing add button and click on that button
        }
      });

    // you can see something by using log method
    cy.log("Wtire your command here...");

    cy.get(".brand").then(function (logoElement) {
      cy.log(logoElement.text());
    });

    // Using alias like "as()" to assign cypress command to a variable
    cy.get(".products").as('productLocator')
    cy.get('@productLocator').find(".product").should("have.length", 4);

    // Assertion
    cy.get(".brand").should('have.text', 'GREENKART') 



  });





});
