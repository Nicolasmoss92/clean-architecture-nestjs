import { Inject, Injectable } from '@nestjs/common';
import { ICreatePetUseCase } from './create.interface';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { CreatePetDto } from 'src/presentation/controller/create/create.dto';
import { Pet } from 'src/core/entities/pet';

@Injectable()
export class CreatePetUsecase implements ICreatePetUseCase  {
    constructor(
        @Inject('PetRepository') private petRepository: IPetRepository
    ) {}

    async create(body: Pet): Promise<any> {
       return await this.petRepository.create(body);
    }
}
