/// <reference types="cypress" />

describe('Distrelec_CH Webshop Login',()=>{
it('Login scenario_Happy flow',()=>{
    cy.visit('https://automation:zPdgwH`dCXPzpAd6K.g$@dev.distrelec.ch')
    cy.get('.accept-btn-container').click()
    cy.get('.desktop-holder > [href="/login"]').click()
    cy.get(':nth-child(1) > :nth-child(2) > #j_username').type('autotest@gmail.com')
    cy.get('.col-sm-12 > #j_password').type('distrelec')
    cy.get('.col-sm-12 > .mat-button').click()
    cy.get('.mod-servicenav > .fsettingsContainer > :nth-child(1) > .border > .settings').click({ force: true });
    //cy.get('#select-languageSelectBoxItOptions > .selectboxit-option-anchor').scrollIntoView().should('be.visible')
  
})
})