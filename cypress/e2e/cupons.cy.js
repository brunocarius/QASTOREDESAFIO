describe('Inserção de cupons', () => {
    context ('Cupons válidos', () =>{
        it ('Usuário deve ter frete grátis ao inserir cupom "FRETEGRATIS" no carrinho', () => {
            const ProductName = '[CATEGORIA] Produto com categoria - 1 Nível'
            const cupomName = 'FRETEGRATIS'
            const textoCupom = 'Frete Grátis'

            cy.addProdutoCarrinho(ProductName)
            cy.addCupomCarrinho(cupomName)

            cy.get('.cupom-codigo')
                .should('be.visible')
                .should('have.text', cupomName)

            cy.get('.cupom-valor > .cor-secundaria')
                .should('be.visible')
                .should('have.text', textoCupom)
            
            
        })

        it('Usuário deve ter 10% de desconto ao inserir cupom "10OFF" no carrinho', () => {
            const ProductName = '[CATEGORIA] Produto com categoria - 1 Nível'
            const cupomName = '10OFF'
            const PercentualDesconto = '10 %'


            cy.addProdutoCarrinho(ProductName)
            cy.addCupomCarrinho(cupomName)

            cy.get('.cupom-codigo')
                .should('be.visible')
                .should('have.text', cupomName)

            cy.contains('#cupom_desconto', PercentualDesconto)
                .should('be.visible')
            
            
        })

        it('Usuário deve ter 30 reais de desconto ao inserir cupom "30REAIS" no carrinho', () => {
            const ProductName = '[CATEGORIA] Produto com categoria - 1 Nível'
            const cupomName = '30REAIS'
            const ValorDesconto = 'R$ 30,00'


            cy.addProdutoCarrinho(ProductName)
            cy.addCupomCarrinho(cupomName)

            cy.get('.cupom-codigo')
                .should('be.visible')
                .should('have.text', cupomName)

            cy.contains('#cupom_desconto', ValorDesconto)
                .should('be.visible')
            
        })
    })

    context ('Cupom vencido', () =>{
        it('Não deve ser possível utilizar um cupom vencido', () => {
            const ProductName = '[CATEGORIA] Produto com categoria - 1 Nível'
            const cupomName = 'CUPOMVENCIDO'
            const textoCupom = 'O cupom não é válido'


            cy.addProdutoCarrinho(ProductName)
            cy.addCupomCarrinho(cupomName)

            cy.contains('.alert-danger', textoCupom)
                .should('be.visible')       

    })
    })
})
