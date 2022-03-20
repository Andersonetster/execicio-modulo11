/// <reference types="cypress"/>


context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac')
    });

    it ('deve exibir uma mensagem de erro ao inseir usuário invalido' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@testecom')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error > li').should('contain' , 'O usuário aluno_ebac@testecom não está registrado neste site')
    })

    it('deve exibir uma mensagem de erro ao inseir usuário senha invalida' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida')
    })




    
});


