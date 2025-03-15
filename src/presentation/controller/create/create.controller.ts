import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('petServiceCreate')
export class PetController {
  constructor(private readonly appService: AppService) {}

  @Get()
  createPet(): string {
    return this.appService.getHello();
  }
}
