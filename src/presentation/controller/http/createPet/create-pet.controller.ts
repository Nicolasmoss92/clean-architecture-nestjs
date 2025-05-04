import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from '../../../../core/useCases/createPet/create-pet.interface';
import { CreatePetDto } from './create-pet.dto';
import { PetMapper } from './pet.mapper';
import { ApiPetCreate } from 'src/shared/documentation/decorators';

@Controller('petServiceCreate')
export class CreatePetController {
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
