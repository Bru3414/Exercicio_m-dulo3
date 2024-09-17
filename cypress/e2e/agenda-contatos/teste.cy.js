/// <reference types="cypress" />

describe('Teste para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve cadastrar um contato', () => {
        cy.get('input[type="text"]').type('Cria Nome Teste')
        cy.get('input[type="email"]').type('criaemailteste@gmail.com')
        cy.get('input[type="tel"]').type('99 999999999')
        cy.get('button[type="submit"]').click()
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Edita Nome Teste')
        cy.get('input[type="email"]').clear().type('editaemailteste@gmail.com')
        cy.get('input[type="tel"]').clear().type('99 888888888')
        cy.get('.alterar').click()
        cy.get('.adicionar').should('have.length', 1)
    })

    it('Deve deletar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})