import { Pet } from 'src/core/entities/pet';

export interface ICreatePetUseCase {
  create(body: Pet): Promise<any>;
}
