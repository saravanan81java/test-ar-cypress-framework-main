/// <reference types="cypress" />


describe('ProtoCommerce Test scenarios',()=>{
    beforeEach(function(){
        cy.fixture('example').then((example)=>
        {
         this.example=example
        })
    })

    it('Type the values in Name field and make sure the value is same in Two way data binding field',()=>{

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.field)
        cy.get(':nth-child(1) > .form-control').should('have.value',this.data.field)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.field)
    })
   
/*
    it('Make sure the Name field have attribute minLength which is equal to 2',()=>{

      cy.visit('https://rahulshettyacademy.com/angularpractice/')
      cy.get(':nth-child(1) > .form-control').should('have.attr','minlength')
      cy.get(':nth-child(1) > .form-control').type('A')
      cy.get(':nth-child(2) > .form-control').click()
      cy.get(':nth-child(1) > .alert').should('have.text','Name should be at least 2 characters')

    })
    */
  /*
    it('Make sure the Entrepreneur radio button value is disabled',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //cy.get(':nth-child(7) > :nth-child(4) > .form-check-label').should('be.disabled')

        cy.get('#inlineRadio2').check()
        cy.get('#inlineRadio2').should('be.checked')
    })
*/

})    