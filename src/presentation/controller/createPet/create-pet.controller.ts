import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from 'src/core/useCases/createPet/create-pet.interface';
import { CreatePetDto } from './create-pet.dto';
import { Pet } from 'src/core/entities/pet';
import { PetMapper } from './pet.mapper';

@Controller('petServiceCreate')
export class PetController {
  constructor(
    @Inject('CreatePetUseCase') private readonly createPetUsecase: ICreatePetUseCase,
  ) {}

  @Post()
  @HttpCode(204)
  async handle(@Body() createPetDto: CreatePetDto): Promise<void> {
    const pet = PetMapper.fromCreateDtoToEntity(createPetDto);
    await this.createPetUsecase.create(pet);
  }
}
