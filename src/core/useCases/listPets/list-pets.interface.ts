import { Pet } from '../../../core/entities/pet';

export interface IListPetsUseCase {
  list(): Promise<Pet[]>;
}
