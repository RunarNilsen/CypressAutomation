/// <reference types="Cypress" />
//import { data } from 'cypress/types/jquery'
import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";
describe("My Second Test Suite", function () {
  before(function () {
    // runs once before all tests in the block. It loads the example.json file to here

    cy.fixture("example").then(function (data) {
      // Accessing the data inside th example.json file in the fixture folder
      this.data = data; // we can reach the data in anywhere in this page by usung this.data
    });
  });

  it("My FirstTest case", function () {
    cy.log(this.data.name + " , " + this.data.gender);
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit(Cypress.env("url") + "/angularpractice/");

    // homePage.getEditBox()  getting web element
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    Cypress.config("defaultCommandTimeout", 8000); //changing configuration
    homePage.getShopTab().click();

    // getting product name from the Json file and insert them into the customized command
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    // Clicking chekout button
    productPage.checkOutButton().click();
    var sum = 0;

    // calculating the total amount
    cy.get("tr td:nth-child(4) strong").each(($el, index, $list) => {
        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
  // we put this log into the PROMISE, otherwise it will run before executing above codes

      })
      .then(function () {
        cy.log(sum).debug();
      });
      //cy.pause()

      cy.get("h3 strong").then(function (element) {
        const amount = element.text();
        var res = amount.split(" ");
        var total = res[1].trim();
        expect(Number(total)).to.equal(sum);
      });


    cy.contains('Checkout').click()
    cy.get('#country').type('India') // when typing india, it appear in popup menu
    // before listing india, it takes 7 second. So we modified timing as 8s above
    // up to 10 sec it can be acceptable
    //changing configuration
    // cy.get('.suggestions > ul > li > a', { timeout: 10000 }).click() 
    cy.get('.suggestions > ul > li > a').click() // you can select it like that
    // That element is covered by another element.Thats why we use 'force:true'
    cy.get('#checkbox2').click({ force: true }) 
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })
    // another ways to verify 
    //cy.get('.alert').should('include.text','Success!') 
    // cy.get(`.alert`).should('contain.text', 'Success!')

 






    // it last
  });









  //decribe last
});
