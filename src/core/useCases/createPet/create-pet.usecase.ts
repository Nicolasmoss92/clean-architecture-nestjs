import { Inject, Injectable } from '@nestjs/common';
import { ICreatePetUseCase } from './create-pet.interface';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from 'src/core/entities/pet';
import { PetAlreadyExistsException } from '../../../core/exceptions/pet-already-exists.exception';

@Injectable()
export class CreatePetUsecase implements ICreatePetUseCase {
  constructor(
    @Inject('PetRepository') private petRepository: IPetRepository
  ) { }

  async create(body: Pet): Promise<any> {
    const pet = await this.petRepository.getPetById(body.id);

    if (pet && pet.id === body.id) {
      throw new PetAlreadyExistsException;
    }

    await this.petRepository.create(body);
  }
}
