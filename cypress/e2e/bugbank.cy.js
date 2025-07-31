describe('template spec', () => {

  beforeEach(() => {

    cy.visit('/')
    cy.get('#__next > div > div > h1')
      .should('be.visible')
      .should('have.text', 'O banco com bugs e falhas do seu jeito')
  })

  it('Cadastro de usuário com sucesso', () => {
    
    const email = 'teste@teste.com'
    const name = 'Carlos da Silva'
    const password = '123@Xyz'

    cy.userRegistration(email, name, password, password, false)
    cy.get('svg[color="green"]').should('be.visible')
    cy.get('#modalText').contains(/^A conta \d{1,3}-\d foi criada com sucesso$/).should('be.visible');
    cy.contains('Fechar').click()

    cy.login(email, password)

    cy.url().should('match', /home$/)
    cy.get('#textName').should('have.text', 'Olá ' + name + ',')

  })

  it('Cadastro de usuário com dados inválidos - nome não informado', () => {

    cy.userRegistration('teste@teste.com', '', '123@Xyz', '123@Xyz', true)
    cy.get('svg[color="red"]').should('be.visible')
    cy.get('#modalText').should('have.text', 'Nome não pode ser vazio.\n')
    cy.contains('Fechar').click()

  })

  it('Transferência para uma conta inexistente', () => {

    const email = 'teste@teste.com'
    const name = 'Carlos da Silva'
    const password = '123@Xyz'
    const accountNumber = '000'
    const digit = '1'
    const transferValue = '100'
    const description = 'teste'

    cy.userRegistration(email, name, password, password, false)
    cy.contains('Fechar').click()

    cy.login(email, password)

    cy.transferValue(accountNumber, digit, transferValue, description)

    cy.get('#modalText').should('have.text', 'Conta inválida ou inexistente')
    cy.contains('Fechar').click()

  })

})