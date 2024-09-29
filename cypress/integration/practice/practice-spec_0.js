/// <reference types="cypress" />


describe('Login Validation',()=>{

it('TC_1_Login_Positive flow',()=>{

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
cy.get('.search-keyword').type('ca')

// as method for variable assignment

cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product')
.should('have.length',4)

//Mocha Assertions
//cy.get('div.product:visible').should('have.length',2)
//cy.get('div.product:visible').should('include.text','Brocolli')

// get and find methods
//cy.get(".products").find(".product").eq(1).contains("Add to cart").click()
/*
cy
.get('.products')
.find('.product')
.should('have.length',4)
.eq(2).contains('ADD TO CART').click()
//.eq(2).find('button')
//.should('have.length',1)
.click()
*/
//each loop in Cypress
/*cy
.get('.products')
.find('.product')
.find('.product-name')
.each(($el, index, $list) =>{

   if($el.text().includes('Carrot')){

    cy.wrap($el.find('button')).click()

   }
})
*/
//Handling the Promises, since the text method is an non cypress method, it is an Jquery method
cy.get('.brand').then(function(logo){
  cy.log('Page title is: '+logo.text())
})
//
})
})