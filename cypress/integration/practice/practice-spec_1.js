/// <reference types="cypress" />

describe('Login Validation',()=>{

    it('TC_1_Login_Positive flow',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,_index,_$list) => {
            const vegetable=$el.find('h4.product-name').text()
            if(vegetable.includes('Carrots')){
                cy.wrap($el).find('button').click()
            }
          })
    })
})    