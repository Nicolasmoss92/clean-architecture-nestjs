import { Controller, Inject, Post } from '@nestjs/common';

@Controller('petServiceCreate')
export class PetController {
  constructor(
    @Inject('CreatePetUsecase') private readonly createPetUsecase: CreatePetUsecase
  ) {}

  @Post()
  createPet(): Promise<any> {
    return this.createPetUsecase.createPet();
  }
}
