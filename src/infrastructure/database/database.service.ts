import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import knex, { Knex } from 'knex';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private knexInstance: Knex;

  constructor(private readonly configService: ConfigService) {
    this.knexInstance = knex({
      client: 'pg',
      connection: {
        host: this.configService.get<string>('DB_HOST'),
        port: this.configService.get<number>('DB_PORT'),
        user: this.configService.get<string>('DB_USER'),
        password: this.configService.get<string>('DB_PASSWORD'),
        database: this.configService.get<string>('DB_NAME'),
      },
      migrations: {
        tableName: 'migrations',
        directory: '../../migrations',
      },
      seeds: {
        directory: '../../seeds',
      },
    });
  }

  getConnection(): Knex {
    return this.knexInstance;
  }

  async onModuleInit() {
    console.log('DatabaseService initialized');
  }

  async onModuleDestroy() {
    await this.knexInstance.destroy();
    console.log('DatabaseService connection closed');
  }
}
