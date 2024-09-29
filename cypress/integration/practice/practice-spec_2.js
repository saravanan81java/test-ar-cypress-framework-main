/// <reference types="cypress" />



describe("Handling dropdown",()=>{


it("Static dropdown Handling",()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
    
})

it("Dynamic dropdown handling",()=>{

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#autocomplete').type('Amer')
    cy.get('#ui-id-1 li').each(($el,_index,_$list) => {
        if ($el.text()==='Cameroon') {
           cy.wrap($el).click()
        }
      })

      cy.get('#autocomplete').should('have.value','Cameroon')
  
})
})