import { Controller, Get, Post } from '@nestjs/common';
import { PetService } from 'src/application/usecases/create/create';

@Controller('petServiceCreate')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  createPet(): string {
    return this.petService.getHello();
  }
}
