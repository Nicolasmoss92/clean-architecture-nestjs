import { Module } from '@nestjs/common';
import { KnexModule } from './infrastructure/database/knex.module';
import { CreatePetUsecase } from './core/useCases/createPet/create-pet.usecase';
import { RepositoriesModule } from './infrastructure/repositories/module/repositories.module';
import { CreatePetController } from './presentation/controller/http/createPet/create-pet.controller';
import { ListPetsController } from './presentation/controller/http/listPets/list-pets.controller';
import { ListPetsUseCase } from './core/useCases/listPets/list-pets.usecase';

@Module({
  imports: [KnexModule, RepositoriesModule],
  controllers: [CreatePetController, ListPetsController],
  providers: [
    {
      provide: 'CreatePetUseCase',
      useClass: CreatePetUsecase,
    },
    {
      provide: 'ListPetsUseCase',
      useClass: ListPetsUseCase,
    },
  ],
})
export class AppModule { }
