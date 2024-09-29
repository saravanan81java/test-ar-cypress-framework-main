
describe('ProtoCommerce Test scenarios',()=>{
    beforeEach(function(){
        cy.fixture('example').then((example)=>
        {
         this.example=example
        })
    })

    it('Type the values in Name field and make sure the value is same in Two way data binding field',()=>{

        cy.visit('https://automation:zPdgwH`dCXPzpAd6K.g$@dev.distrelec.ch')
        cy.get('.accept-btn-container').click()
        
    })
})