import { Module } from '@nestjs/common';
import { KnexModule } from './infrastructure/database/knex.module';
import { CreatePetUsecase } from './core/useCases/createPet/create-pet.usecase';
import { RepositoriesModule } from './infrastructure/repositories/module/repositories.module';
import { GetPetByIdController } from './presentation/controller/http/getPetById/get-by-id.controller';
import { CreatePetController } from './presentation/controller/http/createPet/create-pet.controller';

@Module({
  imports: [KnexModule, RepositoriesModule],
  controllers: [CreatePetController],
  providers: [
    {
      provide: 'CreatePetUseCase',
      useClass: CreatePetUsecase,
    },
  ],
})
export class AppModule { }
