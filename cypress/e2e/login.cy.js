/// <reference types="cypress" />

describe('Teste de login no Plano Aliados', () => {
  it('Deve acessar a página inicial, fazer login e verificar mensagem de sucesso', () => {
    // Acessa a página inicial
    cy.visit('https://planoaliados.com.br/portal/');
    cy.wait(5000)

    // Preenche o formulário de login
    cy.get('#model_Login').type('057.484.723-50'); // Substitua pelo seletor correto
    cy.get('#model_Password').type('654321'); // Substitua pelo seletor correto

    // Clica no botão Entrar
    cy.get('.v-card__actions > button.v-btn > .v-btn__content').click(); // Substitua pelo seletor correto

    // Verifica se a mensagem de sucesso é exibida
    cy.contains('Login realizado com sucesso!').should('be.visible');
  });
});
