import { Pet } from '../../../../core/entities/pet';
import { CreatePetDto } from './create-pet.dto';

export class PetMapper {
  static fromCreateDtoToEntity(dto: CreatePetDto): Pet {
    return new Pet({
      id: dto.id,
      name: dto.name,
      species: dto.species,
      age: dto.age,
      ownerId: dto.ownerId,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}
