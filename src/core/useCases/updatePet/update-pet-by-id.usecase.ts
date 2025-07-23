import { Inject, Injectable } from '@nestjs/common';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { IUpdatePetUseCase } from './update-pet-by-id.interface';
import { Pet } from '../../../core/entities/pet';

@Injectable()
export class UpdatePetUseCase implements IUpdatePetUseCase {
  constructor(@Inject('PetRepository') private petRepository: IPetRepository) {}

  async update(body: Pet): Promise<void> {
    await this.petRepository.update(body);
  }
}
