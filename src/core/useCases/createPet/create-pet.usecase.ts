import { Inject, Injectable } from '@nestjs/common';
import { ICreatePetUseCase } from './create-pet.interface';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from 'src/core/entities/pet';
import { PetAlreadyExistsException } from 'src/core/exceptions/pet-already-exists.exception';

@Injectable()
export class CreatePetUsecase implements ICreatePetUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository
  ) { }

  async create(body: Pet): Promise<any> {
    await this.petRepository.create(body);
  }
}
