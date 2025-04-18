import { Controller, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from 'src/core/usecases/create/create.interface';
import { ControllerBase } from 'src/presentation/ports/controller';

@Controller('petServiceCreate')
export class PetController extends ControllerBase {
  constructor(
    @Inject('CreatePetUseCase') private readonly createPetUsecase: ICreatePetUseCase,
  ) {
    super();
  }

  @Post()
  handle(): Promise<any> {
    return this.createPetUsecase.create();
  }
  
  exception(error: unknown): Error {
    return new Error('An error occurred while creating the pet.');
  }
}
