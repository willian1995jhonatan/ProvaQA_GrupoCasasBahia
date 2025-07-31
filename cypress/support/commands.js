// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('userRegistration', (email, name, password, passwordConfirmation, emptyName) => {

    cy.contains('Registrar').click()
    cy.get('div.card__register input[type="email"]')
        .click({ force: true })
        .type(email)

    if (emptyName == false) {
        cy.get('div.card__register input[type="name"]')
            .click({ force: true })
            .type(name)
    }

    cy.get('div.card__register input[name="password"]')
        .click({ force: true })
        .type(password, { log: false })
    cy.get('div.card__register input[name="passwordConfirmation"]')
        .click({ force: true })
        .type(passwordConfirmation, { log: false })

    cy.get('#toggleAddBalance').click({ force: true })

    cy.contains('Cadastrar').click({ force: true })


})

Cypress.Commands.add('login', (email, password) => {

    cy.get('div.card__login input[type="email"]').type(email)
    cy.get('div.card__login input[name="password"]').type(password, { log: false })
    cy.contains('Acessar').click()

})

Cypress.Commands.add('transferValue', (accountNumber, digit, transferValue, description) => {

    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get('input[type="accountNumber"]').type(accountNumber)
    cy.get('input[type="digit"]').type(digit)
    cy.get('input[type="transferValue"]').type(transferValue)
    cy.get('input[type="description"]').type(description)
    cy.contains('Transferir agora').click()

})