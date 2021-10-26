/// <reference types="Cypress"/>
describe("Checkbox and Dropdown Examples", () => {
  it("Does not do much!", () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1') // check the specific checklist element and verify it
    // uncheck the box
    cy.get("#checkBoxOption1").uncheck().should('not.be.checked').and('have.value', 'option1') // check the specific checklist element and verify it

     // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // verifying multiple checkboxes
    cy.get("input[type='checkbox']").check(['option2']) // checking thw second box with its value
    cy.get("input[type='checkbox']").check(['option1', 'option3']) // checking the multiple chekboxes 

    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // Verify radio buttons
    cy.get("input[value='radio2']").check().should('be.checked')  // you can not uncheck radiobutton, just check another one


    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // Dropdowns

    // Static dropdown
    cy.get('select').select('option3').should('have.value', 'option3')

    // Dynamic Dropdowns
    // when typing ind, options will come out
    // each method can resolve the PROMISE
    cy.get('#autocomplete').type('in')
    cy.get(".ui-menu-item div")
      .each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text()==='India') {
          $el.trigger('click')
          cy.get('#autocomplete').should('have.value', 'India')
        }
      });

      // ------------------------------------------------------------------------------------------------------------------------
      // ------------------------------------------------------------------------------------------------------------------------
      //--------Handling Visible and invisible elements using Assertions in Cypress----
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').trigger('click')  // click button to hide the element
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').trigger('click')  // click button to showthe element
      cy.get('#displayed-text').should('be.visible')



  });





});
