import { GetPetByIdUseCase } from './get-pet-by-id.usecase';
import { IPetRepository } from 'src/core/ports/pet.repository';
import { Pet } from '../../../core/entities/pet';
import { PetNotFoundException } from 'src/core/exceptions/pet-not-found.exception';

describe('GetPetByIdUseCase', () => {
  let useCase: GetPetByIdUseCase;
  let mockRepository: jest.Mocked<IPetRepository>;

  beforeEach(() => {
    mockRepository = {
      getPetById: jest.fn(),
    } as unknown as jest.Mocked<IPetRepository>;

    useCase = new GetPetByIdUseCase(mockRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the pet if it exists', async () => {
    const pet = new Pet({
      id: 'pet-123',
      name: 'Fubá',
      species: 'cat',
      age: 2,
      ownerId: 'owner-456',
      created_at: new Date(),
      updated_at: new Date(),
    });

    mockRepository.getPetById.mockResolvedValue(pet);

    const result = await useCase.getById('pet-123');

    expect(mockRepository.getPetById).toHaveBeenCalledWith('pet-123');
    expect(result).toBe(pet);
  });

  it('should throw PetNotFoundException if pet does not exist', async () => {
    mockRepository.getPetById.mockResolvedValue(null);

    await expect(useCase.getById('non-existent-id')).rejects.toThrow(PetNotFoundException);
    expect(mockRepository.getPetById).toHaveBeenCalledWith('non-existent-id');
  });
});
