/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { gerarCPF } from '../support/utils';


describe('login',() =>{
    
it('01- Acessando Link Fornecido', () => {
cy.visit('https://homologlogin.cpb.org.br/realms/cpb/protocol/openid-connect/auth?response_type=code&client_id=cadastro-web&redirect_uri=https%3A%2F%2Fhomologcadastro.cpb.org.br%2Fcadastro-geral-web%2F&state=50849ac3-2ce9-4084-927f-05ece1016bdf&scope=openid')
cy.get('.container')
})

it('02- Clicar no botão Registrar Clube', () => {
cy.visit('https://homologlogin.cpb.org.br/realms/cpb/protocol/openid-connect/auth?response_type=code&client_id=cadastro-web&redirect_uri=https%3A%2F%2Fhomologcadastro.cpb.org.br%2Fcadastro-geral-web%2F&state=50849ac3-2ce9-4084-927f-05ece1016bdf&scope=openid')
cy.get('[href="http://homolognovocadastro.cpb.org.br/public/clubes-externos"] > .btn')
.contains('Registrar Clube')

})


it('03- Clicar no botão Continuar', () => {
cy.visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos')
cy.wait(2000)
cy.contains('Continuar').click()
//cy.get('body').type('{esc}');
//cy.get('#cnpjClube').click()
})

it('04- Preencher os campos da tela com dados fictícios e dinâmicos', () => {
    const cpfValido = gerarCPF();
cy.visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos')
cy.wait(1000)
cy.get('.form-actions > .action > .btn-primary')
.click()
cy.get('#cnpjClube').type('39.540.213/0001-26')
cy.get(':nth-child(1) > :nth-child(2) > .col-sm-12 > :nth-child(1) > .col-sm-2 > .row > .btn-primary')
.click()
cy.get('.swal2-confirm').click()
.wait(2000)
cy.get('#nomeCompletoClube').type('Comitê Testes',{force:true})
cy.get('#siglaClube').type('WJFR',{force:true})
cy.get('#siglaClube').type('WJFR',{force:true})
cy.get('#emailClube').type('carffdafsdafdflosl@gmail.com',{force:true})
cy.get('#dataFundacaoClube').type('19121995',{force:true})
cy.get('#siteClube').type('www.sitedoclube.com',{force:true})
cy.get('#telefoneClube').type('1125184389',{force:true})
cy.get('#cepClube').type('03532020',{force:true})
cy.get('#enderecoClube').type('Rua Paranhos',{force:true})
cy.get('#numeroClube').type('148',{force:true})
cy.get('#complementoClube').type('CASA',{force:true})
cy.get('#bairroClube').type('Vila Matilde',{force:true})

cy.get('#estadoClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').click()
cy.get('#estadoClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').type('São Paulo')
cy.get('.pb-1').click()
//Selecionando Cidade
cy.get('#cidadeClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').click()
cy.get('#cidadeClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').type('São Paulo')
cy.get('.pb-1 > span').click()

//Inserindo dados da Presidencia
//cy.get('#cpfPresidente').click()
cy.get('#cpfPresidente').type('885.144.060-35',{force:true})
cy.get(':nth-child(3) > :nth-child(2) > .col-sm-12 > :nth-child(1) > .col-sm-2 > .row > .btn-primary')
.click()
cy.get('.swal2-close').click()
cy.get('.swal2-popup').should('not.exist').wait(1000)
//cy.get('.swal2-confirm').click()
//.wait(1000)
cy.get('#nomePresidente').type('Julio Casares',{force:true})
cy.get('#emailPresidente').type('robfdafsaeddrto@fafsfd.com',{force:true})
cy.get('#dataNascimentoPresidente').type('19121999',{force:true})
cy.get('#telefonePresidente').type('1125184389',{force:true})
cy.get('#celularPresidente').type('11966641205',{force:true})
cy.get('#dataEleicaoPresidente').type('01122022',{force:true})
cy.get('#dataInicioMandatoPresidente').type('01122023',{force:true})
cy.get('#dataTerminoMandatoPresidente').type('01012024',{force:true})

//Dados diretor
cy.get('#cpfDiretor').click()
cy.get('#cpfDiretor').type('409.467.530-24',{force:true})
cy.get(':nth-child(4) > :nth-child(2) > .col-sm-12 > :nth-child(1) > .col-sm-2 > .row > .btn-primary').click()
cy.get('.swal2-close').click()
cy.get('.swal2-popup').should('not.exist');
cy.get('body').type('{esc}');
cy.get('#nomeDiretor').type('Camilo Santana',{force:true})
cy.get('#emailDiretor').type('camila@fsfsaffasfa.com',{force:true})
cy.get('#dataNascimentoDiretor').type('21011998',{force:true})
cy.get('#telefoneDiretor').type('1125184388',{force:true})
cy.get('#celularDiretor').type('11968157276',{force:true})

//Marcando CheckBox para selecionar ALGUMAS as Modalidades
cy.get('#modalidade-0').check()
cy.get('#modalidade-11').check()
cy.get('#modalidade-17').check()

//Marcando CheckBox caso queira selecionar TODAS as Modalidades:
//cy.get('input[type="checkbox"]').check()

//Selecionando arquivos
cy.get('#arquivoEstatuto').selectFile('C:/TesteComitê/Cypress/cypress/cypress/fixtures/profile.pdf');
cy.get('#arquivoAtaFundacao').selectFile('C:/TesteComitê/Cypress/cypress/cypress/fixtures/profile.pdf');
cy.get('#arquivoAtaEleicao').selectFile('C:/TesteComitê/Cypress/cypress/cypress/fixtures/profile.pdf');
cy.get('#arquivoCNPJ').selectFile('C:/TesteComitê/Cypress/cypress/cypress/fixtures/profile.pdf');

//Clicar no botão salvar
cy.get('.card > .action > .btn-primary').click()

// Validar se o cadastro foi finalizado com sucesso
//cy.get('#swal2-title').should('be.visible')
//cy.get('.swal2-popup').should('contains','Sucesso')

//Validar se exibe o botão erro após clicar em SALVAR
cy.get('.swal2-popup').should('be.visible');
cy.get('.swal2-popup').should('contain.text', 'Erro');
cy.get('.swal2-confirm').click();
cy.get('.swal2-popup').should('not.exist');

})

})
