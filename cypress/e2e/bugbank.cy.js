describe('template bugbank', () => {

  let dados;

  beforeEach(() => {
    cy.fixture('example').then((data) => {
      dados = data;
    });

    cy.visit('/');
    cy.get('#__next > div > div > h1')
      .should('be.visible')
      .should('have.text', 'O banco com bugs e falhas do seu jeito');
  });

  it('Cadastro de usuário com sucesso', () => {
    const { email, nome, senha } = dados.usuarioValido;

    cy.userRegistration(email, nome, senha, senha, false);
    cy.get('svg[color="green"]').should('be.visible');
    cy.get('#modalText').contains(/^A conta \d{1,3}-\d foi criada com sucesso$/).should('be.visible');
    cy.contains('Fechar').click();

    cy.login(email, senha);
    cy.url().should('match', /home$/);
    cy.get('#textName').should('have.text', 'Olá ' + nome + ',');
  });

  it('Cadastro de usuário com dados inválidos - nome não informado', () => {
    const { email, senha } = dados.usuarioSemNome;

    cy.userRegistration(email, '', senha, senha, true);
    cy.get('svg[color="red"]').should('be.visible');
    cy.get('#modalText').should('have.text', 'Nome não pode ser vazio.\n');
    cy.contains('Fechar').click();
  });

  it('Transferência para uma conta inexistente', () => {
    const { email, nome, senha } = dados.usuarioValido;
    const contaInvalida = { numero: '000', digito: '1' };

    cy.userRegistration(email, nome, senha, senha, false);
    cy.contains('Fechar').click();

    cy.login(email, senha);

    cy.transferValue(contaInvalida.numero, contaInvalida.digito, '100', 'teste');
    cy.get('#modalText').should('have.text', 'Conta inválida ou inexistente');
    cy.contains('Fechar').click();
  });
});
