/// <reference types="Cypress"/>
describe("Popups Examples", () => {
    it("Does not do much!", () => {
  
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
       // ------------------------------------------------------------------------------------------------------------------------
      // ------------------------------------------------------------------------------------------------------------------------
      // Cypress Handling Popups by accepting them
      
      // Cypress can follow and get "windiws:alert" event
      cy.get("#alertbtn").trigger('click') // 
      cy.on('window:alert', (str)=> {
          // Mocha assertion
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
      });
      
      // for 'windows:confirm' type
      // clik OK
        cy.get("[value='Confirm']").trigger('click')
        cy.on('window:confirm', (str) => {
            // Mocha assertion
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        });
        // CANCEL a tiklamak icin bu kodu kullaniriz
        cy.get("[value='Confirm']").trigger('click')
        cy.on('window:confirm', (str) => {
            return false;
        });

        // verifying if we click 'cancel'
        //cy.get('#result').contains('You clicked: Cancel') 

        
       // ------------------------------------------------------------------------------------------------------------------------
       //---------------- Handling Child tab with combination of Cypress & Jquery commands
       // use 'invoke' method to invoke the JQuerry 'removeattr' method
       cy.get('#opentab').invoke('removeAttr', 'target').trigger('click')



      
      
  
  
    });
  
  
  
  
  
  });
  