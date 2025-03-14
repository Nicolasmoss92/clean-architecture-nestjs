import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import knex, { Knex } from 'knex';
import { DatabaseService } from '../database/database.service';

@Global()
@Module({
  imports: [ConfigModule], // Importa o módulo de configuração
  providers: [
    {
      provide: 'KnexConnection',
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Knex => {
        return knex({
          client: 'pg',
          connection: {
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            user: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
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
  exports: ['KnexConnection', DatabaseService], // Exporta para ser usado em repositórios
})
export class KnexModule {}
