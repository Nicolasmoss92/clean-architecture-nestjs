import { Inject, Injectable } from '@nestjs/common';
import { ICreatePetUseCase } from './create.interface';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { CreatePetDto } from 'src/presentation/controller/create/create.dto';
import { Pet } from 'src/core/entities/pet';
import { PetAlreadyExistsException } from 'src/core/exceptions/pet-conflict';

@Injectable()
export class CreatePetUsecase implements ICreatePetUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository
  ) { }

  async create(body: Pet): Promise<any> {
    const existing = await this.petRepository.create(body);

    if (existing) {
      throw new PetAlreadyExistsException();
    }
    return;
  }
}
