import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';


@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('test-connection')
  async testConnection() {
    const isConnected = await this.databaseService.getConnection();
    return {
      success: isConnected,
      message: isConnected
        ? '✅ Conexão com o banco de dados bem-sucedida!'
        : '❌ Falha na conexão com o banco de dados.',
    };
  }
}
