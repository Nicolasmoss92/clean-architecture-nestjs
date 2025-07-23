import { DeletePetByIdUseCase } from './delete-pet-by-id.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from '../../../core/entities/pet';
import { PetNotFoundException } from '../../../core/exceptions/pet-not-found.exception';

describe('DeletePetByIdUseCase', () => {
  let useCase: DeletePetByIdUseCase;
  let mockRepository: jest.Mocked<IPetRepository>;

  beforeEach(() => {
    mockRepository = {
      getPetById: jest.fn(),
      deleteById: jest.fn(),
    } as unknown as jest.Mocked<IPetRepository>;

    useCase = new DeletePetByIdUseCase(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should delete the pet if it exists', async () => {
    const pet = new Pet({
      id: '123',
      name: 'Rex',
      species: 'dog',
      age: 5,
      ownerId: 'owner-001',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockRepository.getPetById.mockResolvedValue(pet);

    await useCase.deleteById('123');

    expect(mockRepository.getPetById).toHaveBeenCalledWith('123');
    expect(mockRepository.deleteById).toHaveBeenCalledWith('123');
    expect(mockRepository.deleteById).toHaveBeenCalledTimes(1);
  });

  it('should throw PetNotFoundException if pet does not exist', async () => {
    mockRepository.getPetById.mockResolvedValue(null);

    await expect(useCase.deleteById('not-exist')).rejects.toThrow(PetNotFoundException);
    expect(mockRepository.getPetById).toHaveBeenCalledWith('not-exist');
    expect(mockRepository.deleteById).not.toHaveBeenCalled();
  });
});
