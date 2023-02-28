Cypress.Commands.add('addProdutoCarrinho', (productName = '')=> {
    cy.visit('/')
    cy.contains('li', productName)
        .click()

    cy.get('div.principal > .acoes-produto > .comprar > .botao')
        .click()
    
})

Cypress.Commands.add('addCupomCarrinho', (cupomName = '')=> {
    cy.get('#usarCupom')
                .type(cupomName)
            cy.get('#btn-cupom')
                .click()
    
})

            