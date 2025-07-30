/// <reference types="cypress" />

describe('login',() =>{

beforeEach(() => {

cy.visit('https://bugbank.netlify.app/')
cy.get('#__next > div > div > h1')
.should('be.visible')
.should('have.text', 'O banco com bugs e falhas do seu jeito')
  })

//Cenário 1 - Fluxos Básicos
it('Cadastro de Usuário com Sucesso', () => {
    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').type('willian@gmail.com',{force:true})
    cy.get(':nth-child(3) > .input__default').type('willian rocha',{force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get('label#toggleAddBalance').click({ force: true })
    cy.contains('Cadastrar').click({ force: true })
    cy.get('#modalText').contains(/^A conta \d{1,3}-\d foi criada com sucesso$/).should('be.visible');
    cy.contains('Fechar').click()
})


//Cenário 1 - Fluxos Adicionais
it('Cadastro de usuário com dados inválidos', () => {
    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').type('willian',{force:true})
    cy.get(':nth-child(3) > .input__default').type('willian rocha',{force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get('label#toggleAddBalance').click({ force: true })
    cy.contains('Cadastrar').click({ force: true })
    cy.get('.input__warging').should('contain.text', 'Formato inválido')
})

//Cenário 2 - Fluxos Adicionais
it('Transferência para uma conta inexistente', () => {
    cy.get('.ihdmxA').click()
    cy.get(':nth-child(2) > .input__default').type('willian@gmail.com',{force:true})
    cy.get(':nth-child(3) > .input__default').type('willian rocha',{force:true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123',{force:true})
    cy.get('label#toggleAddBalance').click({ force: true })
    cy.contains('Cadastrar').click({ force: true })
    cy.get('#modalText').contains(/^A conta \d{1,3}-\d foi criada com sucesso$/).should('be.visible');
    cy.contains('Fechar').click()
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('willian@gmail.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123')
    cy.get('.otUnI').click()
    cy.get('#textName').should('contain.text', 'willian rocha')
    cy.get('#textBalance > span').should('contain.text', '1.000,00')
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get(':nth-child(1) > .input__default').type('12345')
    cy.get('.account__data > :nth-child(2) > .input__default').type('7')
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('200')
    cy.get(':nth-child(3) > .input__default').type('Descrição da Transação')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()
    cy.get('#modalText').should('have.text', 'Conta inválida ou inexistente')
    cy.contains('Fechar').click()
})
})
