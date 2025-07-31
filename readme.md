# Prova de QA – Grupo Casas Bahia


Este repositório contém as minhas respostas e resolução de tarefas para o processo seletivo de Analista de Qualidade.

---

## ✅ Pre-requisitos

É necessário ter o **Node.js**, **npm** e **Yarn** instalados para executar este projeto:

- **Node.js** versão `22.15.1`
- **NPM** versão `10.9.2`
- **Yarn** versão `1.22.22`

---

## 🛠️ Projeto Bugbank

### 📥 Baixando o projeto

Clone o repositório com o comando:

```bash
git clone https://github.com/jhonatasmatos/bugbank.git
```

Acesse a pasta do projeto e instale as dependências:

```bash
cd bugbank
yarn
```

---

### ▶️ Executando a aplicação

Execute o projeto com o comando:

```bash
yarn dev
```

Abra o navegador e acesse:

```
http://localhost:3000
```

---

## 🧪 Instalação do Projeto de Testes Cypress

### 📥 Clonando o repositório de testes

```bash
git clone https://github.com/willian1995jhonatan/ProvaQA_GrupoCasasBahia
cd ProvaQA_GrupoCasasBahia
```

### 📦 Instalando as dependências

```bash
npm install
```

### 🔧 Configurando a URL

Edite o arquivo `cypress.env.json` e configure:

```json
{
  "baseUrl": "http://localhost:3000/"
}
```

---

### 🚀 Executando os testes

```bash
npx cypress open
```

Na interface do Cypress:

1. Selecione o navegador desejado.
2. Clique sobre o arquivo `bugbank.cy.js` para iniciar os testes.

Caso queira executar apenas via CLI utilize o comando:

```bash
npm test
```

Testando localmente com outros navegadores

Firefox

```bash
npm run e2e:firefox
```

Edge

```bash
npm run e2e:edge
```

Chrome

```bash
npm run e2e:chrome
```

Electron

```bash
npm run e2e:electron
```

---

## 📁 Evidências de Execução

- Os **relatórios de testes** estão disponíveis na pasta: `cypress/reports`
- Os **vídeos das execuções** estão em: `cypress/videos`

---

## 🧱 Arquitetura

O projeto segue boas práticas recomendadas na [documentação oficial do Cypress](https://docs.cypress.io/app/core-concepts/best-practices#__docusaurus_skipToContent_fallback)

# 🧱 Estrutura da Arquitetura do Projeto

O projeto está estruturado para manter os testes organizados, reutilizáveis e fáceis de manter.

## 📁 Pastas e Arquivos

- `cypress/e2e/`: Contém os testes automatizados end-to-end escritos em JavaScript.
- `cypress/fixtures/`: Contém arquivos JSON com dados utilizados nos testes.
- `cypress/support/`: Armazena comandos personalizados e configurações globais.
- `cypress.config.js`: Arquivo principal de configuração do Cypress.
- `package.json`: Define as dependências, scripts e configurações do projeto.

## ✅ Padrões adotados

- Organização baseada no padrão Page Object Model (POM).
- Seguindo o padrão AAA (Arrange, Act, Assert).
- Testes independentes e fáceis de escalar.

## 🧰 Tecnologias e Ferramentas

- **Cypress** para testes E2E.
- **Mochawesome** para geração de relatórios.
- **GitHub Actions** para execução automatizada dos testes.

## 🔁 Fluxo de Testes

1. Instalação de dependências (`npm install` ou `yarn`)
2. Execução dos testes via CLI (`npx cypress run`)
3. Relatórios gerados automaticamente após execução
4. Testes também são executados automaticamente via GitHub Actions (CI/CD)
