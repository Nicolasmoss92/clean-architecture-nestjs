import { Module } from '@nestjs/common';
import { KnexModule } from './infrastructure/database/knex.module';
import { CreatePetUsecase } from './core/useCases/createPet/create-pet.usecase';
import { RepositoriesModule } from './infrastructure/repositories/module/repositories.module';
import { CreatePetController } from './presentation/controller/http/createPet/create-pet';
import { ListPetsController } from './presentation/controller/http/listPets/list-pets';
import { ListPetsUseCase } from './core/useCases/listPets/list-pets.usecase';
import { DeletePetController } from './presentation/controller/http/deletePetById/delete-pet-by-id';
import { DeletePetByIdUseCase } from './core/useCases/deletePetById/delete-pet-by-id.usecase';

@Module({
  imports: [KnexModule, RepositoriesModule],
  controllers: [CreatePetController, ListPetsController, DeletePetController],
  providers: [
    {
      provide: 'CreatePetUseCase',
      useClass: CreatePetUsecase,
    },
    {
      provide: 'ListPetsUseCase',
      useClass: ListPetsUseCase,
    },
    {
      provide: 'DeletePetByIdUseCase',
      useClass: DeletePetByIdUseCase,
    },
  ],
})
export class AppModule { }
