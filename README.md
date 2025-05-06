
## Description
# NestJS Clean Architecture Boilerplate

Este repositório é um modelo base para construção de APIs modernas com foco em escalabilidade, manutenibilidade e clareza de responsabilidades, utilizando os princípios da Clean Architecture com o framework NestJS.

---

## Objetivo

Este projeto serve como boilerplate genérico e extensível para aplicações Node.js com NestJS, permitindo a evolução natural para sistemas com múltiplos microserviços de forma organizada e desacoplada. Ele pode ser adaptado e aprimorado conforme o domínio e a necessidade do sistema.

---

## Arquitetura Aplicada

### Princípios adotados:

- **Clean Architecture** na separação de camadas e regras de dependência.
- **NestJS** utilizado com responsabilidade — apenas nas camadas externas.
- **Casos de uso desacoplados de qualquer framework**.
- **Inversão de dependência** com o uso de interfaces e injeção via `tsyringe`.
- **Responsabilidade única** para cada classe e módulo.
- **Alta testabilidade** e facilidade de refatoração.

---

## Por que não usamos `BaseController` ou `BaseRepository`?

- **Aproveitamento inteligente do NestJS**: sua arquitetura baseada em decorators e injeção de dependência já promove a separação de camadas.
- **Evitar complexidade desnecessária**: bases genéricas muitas vezes violam o princípio **KISS (Keep It Simple, Stupid)**.
- **Foco na coesão e clareza**: cada classe tem um único propósito, facilitando testes, manutenção e leitura.

---

## Independência de Framework

- **Casos de uso** vivem no núcleo da aplicação e **não conhecem NestJS**.
- O **domínio** não depende de infraestrutura, frameworks ou bibliotecas externas.
- As únicas menções ao NestJS nos casos de uso são:
  - `@Injectable()` para permitir a injeção;
  - `@Inject()` para resolver dependências.

Essas inserções são **mínimas e facilmente substituíveis**, o que garante um núcleo limpo, reutilizável e sustentável.

---

## Estrutura do Projeto
src/
├── config/                       # Configurações globais
├── core/                         # Núcleo da aplicação (domínio + regras de negócio)
│   ├── entities/                 # Entidades de domínio
│   ├── exceptions/              # Exceções de domínio
│   ├── ports/                    # Interfaces e contratos (input/output)
│   ├── useCases/                 # Casos de uso (application layer)
│   └── valueObjects/            # Objetos de valor
├── infrastructure/              # Camada de infraestrutura
│   ├── database/                # Configuração e conexões com banco
│   ├── integrations/            # Integrações externas (se houver)
│   └── repositories/            # Implementações dos repositórios (adapters)
├── presentation/                # Interface com o mundo exterior (HTTP, controllers)
│   └── controller\http/         # Controladores HTTP organizados por caso de uso
├── shared/                      # Módulos e utilitários compartilhados
├── app.module.ts                # Módulo principal do NestJS
└── main.ts                      # Ponto de entrada da aplicação


## Tecnologias

- **NestJS** — framework de aplicação
- **Knex.js** — query builder (acesso ao PostgreSQL)
- **Swagger (OpenAPI)** — documentação automática da API
- **Jest** — testes unitários
- **tsyringe** — injeção de dependência leve
- **PostgreSQL** — banco relacional (via `pg`)

---

## Testes

Testes unitários estão disponíveis para os principais casos de uso e controladores. A estrutura desacoplada torna os testes **simples, rápidos e confiáveis**.

---
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Open Swagger doc

http://localhost:3000/api/docs