import { Module } from '@nestjs/common';
import { PetRepository } from '../pet';
import { KnexModule } from 'src/infrastructure/database/knex.module';

@Module({
  imports: [KnexModule], // importa o módulo que fornece o Knex
  providers: [
    {
      provide: 'PetRepository', // <- esse nome deve bater com o que você usa no @Inject()
      useClass: PetRepository,
    },
  ],
  exports: ['PetRepository'],
})
export class RepositoriesModule {}
