

describe('page home', ()=>{
    it('app deve esta onile', ()=> {
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')


    })
})