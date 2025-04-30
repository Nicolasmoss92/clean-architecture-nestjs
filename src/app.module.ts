import { Module } from '@nestjs/common';
import { KnexModule } from './infrastructure/database/knex.module';
import { CreatePetUsecase } from './core/useCases/createPet/create-pet.usecase';
import { RepositoriesModule } from './infrastructure/repositories/module/repositories.module';
import { PetController } from './presentation/controller/createPet/create-pet.controller';
import { GetPetByIdController } from './presentation/controller/getById/get-by-id.controller';

@Module({
  imports: [KnexModule, RepositoriesModule],
  controllers: [PetController, GetPetByIdController],
  providers: [
    {
      provide: 'CreatePetUseCase',
      useClass: CreatePetUsecase,
    },
  ],
})
export class AppModule { }
