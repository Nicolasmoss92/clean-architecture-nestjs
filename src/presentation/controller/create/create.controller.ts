import { Controller, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from 'src/core/usecases/create/create.interface';
import { ControllerBase } from 'src/presentation/ports/controller';

@Controller('petServiceCreate')
export class PetController {
  constructor(
    @Inject('CreatePetUseCase') private readonly createPetUsecase: ICreatePetUseCase,
  ) {}

  @Post()
  create(): Promise<any> {
    return this.createPetUsecase.create();
  }
}
