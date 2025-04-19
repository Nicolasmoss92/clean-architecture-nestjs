import { Module } from '@nestjs/common';
import { PetRepository } from '../pet';
import { KnexModule } from 'src/infrastructure/database/knex.module';

@Module({
  imports: [KnexModule], 
  providers: [
    {
      provide: 'PetRepository',
      useClass: PetRepository,
    },
  ],
  exports: ['PetRepository'],
})
export class RepositoriesModule {}
