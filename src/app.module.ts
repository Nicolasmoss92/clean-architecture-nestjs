import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from './infrastructure/database/knex.module';
import { PetController } from './presentation/controller/create/create.controller';
import { CreatePetUsecase } from './core/usecases/create/create';

@Module({
  imports: [KnexModule],
  controllers: [AppController, PetController],
  providers: [
    AppService,
    {
      provide: 'CreatePetUseCase',
      useClass: CreatePetUsecase,
    },
  ],
})
export class AppModule {}
