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
      useFactory: (configService: ConfigService): Knex => {
        return knex({
          client: 'pg',
          connection: {
            host: 'localhost',
            port: 5432,
            user: 'pet_service',
            password: '1234',
            database: 'pet_service',
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
export class KnexModule { }
