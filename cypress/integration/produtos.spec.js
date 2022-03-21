/// <reference types="cypress"/>

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos')
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')

            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
        
    });

    it.only('Deve adicionar produtos ao carrinho usando comando customizados', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt' , 'L', 'Green', 3)
        //cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho.')
        
    });

});