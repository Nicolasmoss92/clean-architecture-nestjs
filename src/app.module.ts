import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from './infrastructure/database/knex.module';
import { PetController } from './presentation/controller/create/create.controller';

@Module({
  imports: [KnexModule],
  controllers: [AppController, PetController],
  providers: [AppService],
})
export class AppModule {}
