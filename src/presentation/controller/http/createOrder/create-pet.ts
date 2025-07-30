import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from '../../../../core/useCases/createPet/create-pet.interface';
import { CreatePetDto } from './create-pet.dto';
import { PetMapper } from './pet.mapper';

@Controller('v1')
export class CreatePetController {
  constructor(@Inject('CreatePetUseCase') private readonly createPetUsecase: ICreatePetUseCase) {}

  @Post('/pet')
  @HttpCode(204)
  async handle(@Body() body: CreatePetDto): Promise<void> {
    const pet = PetMapper.fromCreateDtoToEntity(body);

    await this.createPetUsecase.create(pet);
  }
}
