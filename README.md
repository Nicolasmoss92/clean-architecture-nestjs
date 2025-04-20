
## Description

Arquitetura Limpa com NestJS 
Este projeto foi desenvolvido com foco em escalabilidade, manutenibilidade e clareza de responsabilidades, seguindo os princípios da Clean Architecture.

Optei por não utilizar classes genéricas como BaseController ou BaseRepository, e essa decisão foi totalmente consciente e estratégica.

Por que não usar bases genéricas?
Aproveitamento inteligente do NestJS:
O NestJS já fornece uma arquitetura baseada em decorators e injeção de dependência que facilita a separação de camadas e o desacoplamento de responsabilidades. Criar controladores ou repositórios genéricos traria complexidade desnecessária e violaria o princípio KISS (Keep It Simple, Stupid).

Foco na coesão e clareza:
Cada classe foi pensada para representar um único propósito. Com isso, cada controller é responsável por um caso de uso específico, facilitando testes, manutenções e futuras evoluções do código.

Interfaces e inversão de dependência na prática:
A arquitetura respeita o fluxo de dependências da Clean Architecture — o domínio não depende de frameworks. Todas as dependências são invertidas por meio de interfaces e injeção de dependência. Isso garante um sistema altamente testável, desacoplado e pronto para mudanças.

Casos de uso isolados e independentes de frameworks
Os casos de uso foram implementados sem dependência direta do NestJS. Toda a lógica de negócio vive no núcleo da aplicação, e as únicas menções ao framework são:

 - O decorator @Injectable() para permitir injeção;

 - O uso de @Inject() para resolução de dependências.

Essas inserções são mínimas e poderiam ser facilmente trocadas por qualquer mecanismo de injeção, mantendo o núcleo da aplicação limpo, reutilizável e desacoplado da infraestrutura.

Objetivo
Esse projeto tem como objetivo ser um modelo base reutilizável para aplicações Node.js com NestJS, aplicando os princípios da Arquitetura Limpa desde o início, permitindo um crescimento saudável e controlado da aplicação.

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

## Run docker
```bash
$ docker-compose up --build pet-service
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
