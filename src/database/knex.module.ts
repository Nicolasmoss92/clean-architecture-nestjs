import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import knex from 'knex';
import knexConfig from './knexfile';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: 'KnexConnection',
      useValue: knex(knexConfig),
    },
    DatabaseService,
  ],
  exports: ['KnexConnection', DatabaseService],
  controllers: [DatabaseController], // Adicionando o controller
})
export class KnexModule {}
