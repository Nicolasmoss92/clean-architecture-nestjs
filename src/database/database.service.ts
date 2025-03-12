import { Inject, Injectable, Logger } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

  async testConnection(): Promise<boolean> {
    try {
      await this.knex.raw('SELECT 1+1 AS result'); // Teste de conexão simples
      this.logger.log('Conexão com o banco de dados bem-sucedida!');
      return true;
    } catch (error) {
      this.logger.error('Erro ao conectar ao banco de dados:', error);
      return false;
    }
  }
}
