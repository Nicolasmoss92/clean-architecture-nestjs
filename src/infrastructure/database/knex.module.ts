import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import knex, { Knex } from 'knex';
import { DatabaseService } from '../database/database.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'KnexConnection',
      inject: [ConfigService],
      useFactory: (): Knex => {
        return knex({
          client: '',
          connection: {
            host: '',
            port: ,
            user: '',
            password: '',
            database: '',
          },
          migrations: {
            tableName: 'migrations',
            directory: '../../migrations',
          },
          seeds: {
            directory: '../../seeds',
          },
        });
      },
    },
    DatabaseService,
  ],
  exports: ['KnexConnection', DatabaseService],
})
export class KnexModule {}
