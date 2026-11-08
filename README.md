# Aula 15 - CRUD - BACKEND - FILMES

Nessa aula criamos um sistema mínimo de backend com CRUD e uma arquitetura simples baseada em Controllers e Services

## Utilizamos as seguinte tecnologias
- Express v5
- Prisma v7
- SQLite 
- Typescript v7
- Node v25

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm 

## Instalação e configuração

**1. Instale as dependências**

Na raiz do projeto, execute:

```bash
npm install
```

**2. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto, com o seguinte conteúdo:

```env
DATABASE_URL="file:./dev.db"
```

**3. Sincronize o banco de dados**

Execute:

```bash
npx prisma db push
```

Esse comando cria o banco SQLite, caso ainda não exista, e sincroniza sua estrutura com os modelos definidos em `prisma/schema.prisma`.
Nessa aula temos apenas o modelo "filme".


**4. Gere o Prisma Client**

Execute:

```bash
npx prisma generate
```

Esse comando gera o cliente utilizado pela aplicação para acessar o banco de dados.
Será gerada uma pasta "src/generated". Não modifique nada nessa pasta.
Observe também no .gitignore que ela não é versionada, e portanto, não está no repositório.


## Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```


## Prisma Studio

O Prisma Studio permite visualizar, inserir, editar e excluir registros do banco de dados por meio de uma interface gráfica no navegador.

Para iniciar, execute:

```bash
npm run prisma:studio
```

Faça isso em outro terminal para ter, ao mesmo tempo, o prisma studio aberto no navegador e o servidor executando.


**Observação:** neste projeto, o comando do Studio utiliza uma URL específica (`file://./dev.db`) como contorno para uma incompatibilidade observada com SQLite no Prisma Studio. 
A aplicação e a configuração principal do Prisma continuam utilizando `file:./dev.db`.

Você pode conferir isso no package.json.

O comando `prisma:studio` é um script definido no arquivo `package.json`, na seção `scripts`:

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "prisma:studio": "prisma studio --url \"file://./dev/bd\""
  }
}
```


## Estrutura do projeto

```text
backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controller/
│   ├── routes/
│   ├── services/
│   ├── prisma/
│   ├── app.ts
│   └── server.ts
├── .env
├── prisma.config.ts
├── package.json
└── tsconfig.json
```








