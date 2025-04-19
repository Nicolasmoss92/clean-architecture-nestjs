import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ICreatePetUseCase } from 'src/core/usecases/create/create.interface';
import { CreatePetDto } from './create.dto';
import { Pet } from 'src/core/entities/pet';
import { PetMapper } from './petMapper';

@Controller('petServiceCreate')
export class PetController {
  constructor(
    @Inject('CreatePetUseCase') private readonly createPetUsecase: ICreatePetUseCase,
  ) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto): Promise<any> {
    const pet = PetMapper.fromCreateDtoToEntity(createPetDto);
    return await this.createPetUsecase.create(pet);
  }
}
